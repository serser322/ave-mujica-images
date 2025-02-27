import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import SearchBar from '@/components/SearchBar';
import ImageList from '@/components/ImageList';
import ToTopButton from '@/components/ToTopButton';
import RangeSelectBar from '@/components/RangeSelectBar';
import '@/styles/HomePage.scss';
import { SortToggleButtons } from '@/components/SortToggleButtons';

export default function HomePage() {
  const episode = useSelector((state: RootState) => state.contentLayout.episode);
  return (
    <>
      <Box className="search-area come-in-animation">
        <Box sx={{ flex: { xs: 2, lg: 3, xl: 4 } }}>
          <SearchBar />
        </Box>
        <Box sx={{ flex: 1 }}>
          <RangeSelectBar />
        </Box>

        {episode === 0 && (
          <Box sx={{ flex: 0.5 }}>
            <SortToggleButtons />
          </Box>
        )}
      </Box>
      <ImageList />
      <Box>
        <ToTopButton />
      </Box>
    </>
  );
}
