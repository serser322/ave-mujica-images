import { Box } from '@mui/material';
import SearchBar from '@/components/SearchBar';
import RangeSelectBar from '@/components/RangeSelectBar';
import '@/styles/SearchPanel.scss';
// import OrderRadioGroup  from '@/components/OrderRadioGroup';

export default function SearchPanel() {
  return (
    <>
      <Box className="search-area come-in-animation">
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
    </>
  );
}
