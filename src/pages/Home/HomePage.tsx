import { Box } from '@mui/material';
import ImageList from '@/components/images/ImageList';
import ToTopButton from '@/components/images/ToTopButton';
import SearchPanel from '@/components/search/SearchPanel';
import BaseTabs from '@/components/common/BaseTabs';
import '@/styles/HomePage.scss';

export default function HomePage() {
  return (
    <>
      <SearchPanel />
      <BaseTabs />
      <ImageList />
      <Box>
        <ToTopButton />
      </Box>
    </>
  );
}
