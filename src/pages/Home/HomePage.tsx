import { Box } from '@mui/material';
import SearchBar from '@/components/SearchBar';
import { useEffect, useState } from 'react';
import { BaseImage } from '@/type';
import ImageItem from '@/components/ImageItem';
import ToTopButton from '@/components/ToTopButton';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
// import { latestEpisodeSelector } from '@/layout/contentLayoutSlice';
import RangeSelectBar from '@/components/RangeSelectBar';

export default function HomePage() {
  const defaultImageList = useSelector((state: RootState) => state.contentLayout.defaultImageList);
  const keyword = useSelector((state: RootState) => state.contentLayout.keyword);
  const episode = useSelector((state: RootState) => state.contentLayout.episode);
  //   const [originalImageList, setOriginalImageList] = useState<BaseImage[]>(defaultImageList);
  const [imageList, setImageList] = useState<BaseImage[]>(defaultImageList);

  const rangeChangeHandler = (episodeNum: number) => {
    if (episodeNum === 0) {
      setImageList(defaultImageList);
    } else {
      const filteredImageList = defaultImageList.filter((item) => item.episode === episodeNum);
      setImageList(filteredImageList);
    }
  };
  const searchHandler = (keyword: string) => {
    const filteredImageList = defaultImageList.filter((item) => item.name.includes(keyword));
    setImageList(filteredImageList);
  };

  const searchImages = () => {
    if (keyword === '' && episode === 0) {
      setImageList(defaultImageList);
      return;
    }

    if (episode === 0) {
      const filteredImageList = defaultImageList.filter((item) => item.name.includes(keyword));
      setImageList(filteredImageList);
      return;
    }

    const filteredImageList = defaultImageList.filter(
      (item) => item.name.includes(keyword) && item.episode === episode
    );
    setImageList(filteredImageList);
  };

  useEffect(() => {
    // setImageList(defaultImageList);
    // setInitialImageList();
    searchImages();
  }, [keyword, episode]);
  return (
    <>
      <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
        <Box sx={{ flex: { xs: 2, lg: 3, xl: 4 } }}>
          <SearchBar />
        </Box>
        <Box sx={{ flex: 1 }}>
          {/* <RangeSelectBar onSelectChange={rangeChangeHandler} /> */}
          <RangeSelectBar />
        </Box>
      </Box>
      {/* <Box sx={{ mb: 1, color: '#e6e6e6' }}>搜尋總數：{imageList.length}</Box> */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {imageList.length === 0 && <Box sx={{ mt: 2, color: '#e6e6e6' }}>查無截圖 QQ</Box>}
        {imageList.map((image) => (
          <ImageItem key={image.name} image={image} />
        ))}
      </Box>
      <Box>
        <ToTopButton />
      </Box>
    </>
  );
}
