import { Box, createTheme, ThemeProvider } from '@mui/material';
import ContentLayout from './layout/ContentLayout';
import HeaderLayout from './layout/HeaderLayout';
import HomePage from './pages/HomePage';
import FooterLayout from './layout/FooterLayout';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '0.8rem',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh' }}>
          <Box>
            <HeaderLayout />
            <ContentLayout>
              <HomePage />
            </ContentLayout>
          </Box>
          <FooterLayout />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
