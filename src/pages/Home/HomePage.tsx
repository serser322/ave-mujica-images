import { Box } from '@mui/material';
import SearchBar from '@/components/SearchBar';
import { useEffect, useState } from 'react';
import { BaseImage } from '@/type';
import ImageItem from '@/components/ImageItem';
import ToTopButton from '@/components/ToTopButton';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import RangeSelectBar from '@/components/RangeSelectBar';
import '@/styles/HomePage.scss';
// import { OrderRadioGroup } from '@/components/OrderRadioGroup';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const defaultImageList = useSelector((state: RootState) => state.contentLayout.defaultImageList);
  const keyword = useSelector((state: RootState) => state.contentLayout.keyword);
  const episode = useSelector((state: RootState) => state.contentLayout.episode);
  const [imageList, setImageList] = useState<BaseImage[]>(defaultImageList);

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

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 100);
  };

  useEffect(() => {
    searchImages();
  }, [keyword, episode]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Box className={`search-area come-in-animation ${isScrolled ? 'background' : ''}`}>
        <Box sx={{ flex: { xs: 2, lg: 3, xl: 4 } }}>
          <SearchBar />
        </Box>
        <Box sx={{ flex: 1 }}>
          <RangeSelectBar />
        </Box>
        {/* <Box>
          <OrderRadioGroup />
        </Box> */}
      </Box>
      <Box className="come-in-animation" sx={{ ml: 1.5, mb: 1, color: '#dadada', fontSize: 12 }}>
        相關結果：{imageList.length} 張圖
      </Box>
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
