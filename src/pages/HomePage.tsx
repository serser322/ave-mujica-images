import { Box } from '@mui/material';
import SearchBar from '@/components/SearchBar';
import { useEffect, useState } from 'react';
import { BaseImage } from '@/type';
import ImageItem from '@/components/ImageItem';

const defaultImageList = [
  {
    name: '什麼意思',
  },
  {
    name: '我會為妳加油的',
  },
  {
    name: '抱歉',
  },
  {
    name: '是啊2',
  },
  {
    name: '為什麼要演奏春日影',
  },
];

export default function HomePage() {
  const [keyword, setKeyword] = useState('');
  const [imageList, setImageList] = useState<BaseImage[]>(defaultImageList);

  const searchHandler = () => {
    const filteredImageList = defaultImageList.filter((item) => item.name.includes(keyword));
    setImageList(filteredImageList);
  };

  useEffect(() => {
    if (keyword === '') {
      setImageList(defaultImageList);
    }
  }, [keyword]);
  return (
    <>
      <Box>
        <SearchBar onChange={setKeyword} onSearch={searchHandler} />
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {imageList.map((image) => (
          <ImageItem key={image.name} image={image} />
        ))}
      </Box>
    </>
  );
}
