import { useEffect, useState, Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Box, CircularProgress } from '@mui/material';
// import ImageItem from './ImageItem';
import { BaseImage } from '@/type';

export default function ImageList() {
  const defaultImageList = useSelector((state: RootState) => state.contentLayout.defaultImageList);
  const keyword = useSelector((state: RootState) => state.contentLayout.keyword);
  const episode = useSelector((state: RootState) => state.contentLayout.episode);
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

  useEffect(() => {
    searchImages();
  }, [keyword, episode, defaultImageList]);
  return (
    <>
      <Box className="come-in-animation" sx={{ ml: 1.5, mb: 1, color: '#dadada', fontSize: 12 }}>
        相關結果：{imageList.length} 張圖
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {imageList.length === 0 && <Box sx={{ mt: 2, color: '#e6e6e6' }}>查無截圖 QQ</Box>}
        <Suspense fallback={<CircularProgress size="3rem" sx={{ mt: 4 }} />}>
          {imageList.map((image) => (
            <LazyImageItem key={image.name} image={image} />
          ))}
        </Suspense>
      </Box>
    </>
  );
}
