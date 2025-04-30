import { Box } from '@mui/material';
import '@/styles/components/TabImage.scss';

export default function TabImage({ image }: { image: string }) {
  return (
    <Box className="tab-image">
      <img src={image} alt="tab image" />
    </Box>
  );
}
