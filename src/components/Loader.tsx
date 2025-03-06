import { Box } from '@mui/material';

export default function Loader() {
  const url = new URL(`../assets/ave-mujica-togawa-sakiko.gif`, import.meta.url).href;
  return (
    <Box>
      <img style={{ width: '20%', height: 'auto' }} data-src={url} alt="" src={url} className="lazyload" />
    </Box>
  );
}
