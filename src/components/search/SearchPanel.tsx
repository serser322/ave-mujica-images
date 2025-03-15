import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Box } from '@mui/material';
import SearchBar from '@/components/search/SearchBar';
import RangeSelectBar from '@/components/search/RangeSelectBar';
import { SortToggleButtons } from '@/components/search/SortToggleButtons';
import '@/styles/components/SearchPanel.scss';

export default function SearchPanel() {
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
    </>
  );
}
