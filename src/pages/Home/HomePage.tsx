import { Box } from '@mui/material';
import SearchBar from '@/components/SearchBar';
import { useEffect, useState } from 'react';
import { BaseImage } from '@/type';
import ImageItem from '@/components/ImageItem';
import ToTopButton from '@/components/ToTopButton';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function HomePage() {
  const defaultImageList = useSelector((state: RootState) => state.contentLayout.defaultImageList);
  const [imageList, setImageList] = useState<BaseImage[]>(defaultImageList);

  const searchHandler = (keyword: string) => {
    const filteredImageList = defaultImageList.filter((item) => item.name.includes(keyword));
    setImageList(filteredImageList);
  };

  useEffect(() => {
    setImageList(defaultImageList);
  }, []);
  return (
    <>
      <Box>
        <SearchBar onSearch={searchHandler} />
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
