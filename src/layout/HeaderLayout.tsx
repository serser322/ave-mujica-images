import { Box } from '@mui/material';
import '@/styles/HeaderLayout.scss';
import { ImageSearch } from '@mui/icons-material';

export default function HeaderLayout() {
  const logoUrl = new URL(`../assets/logo.png`, import.meta.url).href;
  return (
    <>
      <header>
        <Box className="logo-wrapper">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 2.6, mb: 0.6, width: '50px', color: '#ffffff' }}>
              <ImageSearch sx={{ fontSize: { xs: 55, md: 65 } }} />
            </Box>
            <Box className="logo">
              <img src={logoUrl} alt="logo" />
            </Box>
          </Box>
          <Box sx={{ pl: 0.5, fontSize: 14, fontWeight: 600, color: '#e0e0e0' }}>
            就將一切<span className="line-through">對話訊息</span>委身於Ave Mujica吧！
          </Box>
        </Box>
      </header>
    </>
  );
}
