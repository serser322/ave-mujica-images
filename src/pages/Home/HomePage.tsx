import { Box } from '@mui/material';
import ImageList from '@/components/images/ImageList';
import ToTopButton from '@/components/images/ToTopButton';
import SearchPanel from '@/components/search/SearchPanel';
import '@/styles/HomePage.scss';

export default function HomePage() {
  return (
    <>
      <SearchPanel />
      <ImageList />
      <Box>
        <ToTopButton />
      </Box>
    </>
  );
}
