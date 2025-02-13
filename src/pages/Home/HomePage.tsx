import { Box } from '@mui/material';
import SearchBar from '@/components/SearchBar';
import ImageList from '@/components/ImageList';
import ToTopButton from '@/components/ToTopButton';
import RangeSelectBar from '@/components/RangeSelectBar';
import '@/styles/HomePage.scss';
// import { OrderRadioGroup } from '@/components/OrderRadioGroup';

export default function HomePage() {
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
      <ImageList />
      <Box>
        <ToTopButton />
      </Box>
    </>
  );
}
