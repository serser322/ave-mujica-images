import { createTheme, ThemeProvider } from '@mui/material';
import ContentLayout from './layout/ContentLayout';
import HeaderLayout from './layout/HeaderLayout';
import HomePage from './pages/HomePage';

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
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderLayout />
        <ContentLayout>
          <HomePage />
        </ContentLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
