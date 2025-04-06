import { useEffect, useState, Suspense, CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Box, CircularProgress } from '@mui/material';
import ImageItem from './ImageItem';
import { BaseImage } from '@/type';
import { CellMeasurer, CellMeasurerCache, List, WindowScroller, AutoSizer } from 'react-virtualized';
import { MeasuredCellParent } from 'react-virtualized/dist/es/CellMeasurer';
import 'react-virtualized/styles.css';
import '@/styles/components/ImageList.scss';

interface WindowScrollerProps {
  height: number;
  scrollTop: number;
}

interface AutoSizerChildrenProps {
  width: number;
  height: number;
}

interface ListRowRendererProps {
  index: number;
  key: string;
  parent: MeasuredCellParent;
  style: CSSProperties;
}

export default function ImageList() {
  const currentTab = useSelector((state: RootState) => state.contentLayout.tab);
  const aveMujicaImages = useSelector((state: RootState) => state.contentLayout.aveMujicaImages);
  const myGOImages = useSelector((state: RootState) => state.contentLayout.myGOImages);
  const keyword = useSelector((state: RootState) => state.contentLayout.keyword);
  const aveMujicaEpisode = useSelector((state: RootState) => state.contentLayout.aveMujicaEpisode);
  const myGOEpisode = useSelector((state: RootState) => state.contentLayout.myGOEpisode);
  const order = useSelector((state: RootState) => state.contentLayout.order);
  const [imageList, setImageList] = useState<BaseImage[]>(aveMujicaImages);

  const searchImages = () => {
    if (currentTab === 'ave-mujica') {
      if (keyword === '' && aveMujicaEpisode === 0) {
        setImageList(aveMujicaImages);
        return;
      }

      const filteredImageList = aveMujicaImages.filter((item) => {
        const hasKeyword = item.name.toLowerCase().includes(keyword);
        const matchEpisode = aveMujicaEpisode === 0 || item.episode === aveMujicaEpisode;
        return hasKeyword && matchEpisode;
      });

      setImageList(filteredImageList);
    }

    if (currentTab === 'my-go') {
      if (keyword === '' && myGOEpisode === 0) {
        setImageList(myGOImages);
        return;
      }

      const filteredImageList = myGOImages.filter((item) => {
        const hasKeyword = item.name.toLowerCase().includes(keyword);
        const matchEpisode = myGOEpisode === 0 || item.episode === myGOEpisode;
        return hasKeyword && matchEpisode;
      });

      setImageList(filteredImageList);
    }
  };

  const cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 500,
  });

  const renderRow = ({ index, key, style, parent }: ListRowRendererProps) => {
    const columnCount = getColumnCount();
    const rowItems = imageList.slice(index * columnCount, index * columnCount + columnCount);

    return (
      <CellMeasurer cache={cache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
        <div className="image-item-row" style={{ ...style }}>
          {rowItems.map((image) => (
            <Box key={image.name} className="row-item">
              <ImageItem image={image} />
            </Box>
          ))}
        </div>
      </CellMeasurer>
    );
  };

  const getRowCount = () => {
    const columnCount = getColumnCount();
    return Math.ceil(imageList.length / columnCount);
  };

  const getColumnCount = () => {
    const viewportWidth = window.innerWidth;
    const columnCount = viewportWidth > 1200 ? 4 : viewportWidth > 992 ? 3 : viewportWidth > 768 ? 2 : 1;
    return columnCount;
  };

  useEffect(() => {
    searchImages();
  }, [currentTab, keyword, aveMujicaEpisode, order, aveMujicaImages]);
  return (
    <>
      {/* <Box className="come-in-animation" sx={{ ml: 1.5, mb: 1, color: '#dadada', fontSize: 12 }}>
        相關結果：{imageList.length} 張圖
      </Box> */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {imageList.length === 0 && <Box sx={{ mt: 2, color: '#e6e6e6' }}>查無截圖 QQ</Box>}
        <Box sx={{ width: '100%', height: '100%' }}>
          <Suspense fallback={<CircularProgress size="3rem" sx={{ mt: 4 }} />}>
            <WindowScroller>
              {({ height, scrollTop }: WindowScrollerProps) => (
                <>
                  <AutoSizer disableHeight onResize={() => cache.clearAll()}>
                    {({ width }: AutoSizerChildrenProps) => (
                      <List
                        autoHeight
                        height={height}
                        rowCount={getRowCount()}
                        rowHeight={cache.rowHeight}
                        rowRenderer={renderRow}
                        width={width}
                        scrollTop={scrollTop}
                        erscanRowCount={15}
                      />
                    )}
                  </AutoSizer>
                </>
              )}
            </WindowScroller>
          </Suspense>
        </Box>
      </Box>
    </>
  );
}
