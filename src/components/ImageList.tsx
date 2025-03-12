import { useEffect, useState, Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Box, CircularProgress } from '@mui/material';
import ImageItem from './ImageItem';
import { BaseImage } from '@/type';
import { CellMeasurer, CellMeasurerCache, List, WindowScroller, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once
import FooterLayout from '@/layout/FooterLayout';
// import AutoSizer from 'react-virtualized-auto-sizer';

export default function ImageList() {
  const defaultImageList = useSelector((state: RootState) => state.contentLayout.defaultImageList);
  const keyword = useSelector((state: RootState) => state.contentLayout.keyword);
  const episode = useSelector((state: RootState) => state.contentLayout.episode);
  const order = useSelector((state: RootState) => state.contentLayout.order);
  const [imageList, setImageList] = useState<BaseImage[]>(defaultImageList);

  const LazyImageItem = lazy(() => import('./ImageItem'));
  const searchImages = () => {
    if (keyword === '' && episode === 0) {
      setImageList(defaultImageList);
      return;
    }

    if (episode === 0) {
      const filteredImageList = defaultImageList.filter((item) => item.name.toLowerCase().includes(keyword));
      setImageList(filteredImageList);
      return;
    }

    const filteredImageList = defaultImageList.filter(
      (item) => item.name.toLowerCase().includes(keyword) && item.episode === episode
    );
    setImageList(filteredImageList);
  };

  const cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 200, // A reasonable default height
  });

  const renderRow = ({ index, key, style, parent }) => {
    const itemsForRow = imageList.slice(index * 4, index * 4 + 4);

    return (
      <CellMeasurer cache={cache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
        <div style={{ ...style, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          {itemsForRow.map((image, idx) => (
            <div key={image.name} style={{ width: '32%', margin: '0.5rem', display: 'flex', justifyContent: 'center' }}>
              <ImageItem image={image} />
            </div>
          ))}
        </div>
      </CellMeasurer>
    );
  };

  useEffect(() => {
    searchImages();
  }, [keyword, episode, order, defaultImageList]);
  return (
    <>
      <Box className="come-in-animation" sx={{ ml: 1.5, mb: 1, color: '#dadada', fontSize: 12 }}>
        相關結果：{imageList.length} 張圖
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', height: '500px' }}>
        {imageList.length === 0 && <Box sx={{ mt: 2, color: '#e6e6e6' }}>查無截圖 QQ</Box>}
        {/* <Suspense fallback={<CircularProgress size="3rem" sx={{ mt: 4 }} />}>
          {imageList.map((image) => (
            <LazyImageItem key={image.name} image={image} />
          ))}
        </Suspense> */}
        <Box sx={{ width: '100%', height: '100%' }}>
          <WindowScroller>
            {({ height, isScrolling, onChildScroll, scrollTop }) => (
              <AutoSizer disableHeight>
                {({ width }) => (
                  <List
                    autoHeight
                    height={height}
                    rowCount={Math.ceil(imageList.length / 4)}
                    rowHeight={cache.rowHeight}
                    rowRenderer={renderRow}
                    width={width}
                    scrollTop={scrollTop}
                    // estimatedRowSize={250 * 200}
                    // erscanRowCount={5}
                  />
                )}
              </AutoSizer>
            )}
          </WindowScroller>
        </Box>
      </Box>
      <FooterLayout />
    </>
  );
}
