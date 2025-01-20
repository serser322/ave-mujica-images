import Box from '@mui/material/Box';
import GitHubButton from 'react-github-btn';
import '@/styles/FooterLayout.scss';

export default function FooterLayout() {
  return (
    <footer>
      <Box>
        <GitHubButton
          href="https://github.com/serser322"
          data-color-scheme="no-preference: dark; light: dark_dimmed; dark: dark_dimmed;"
          data-size="large"
          aria-label="Follow @serser322 on GitHub"
        >
          @serser322
        </GitHubButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: { xs: 3, md: 5, lg: 6 },
          alignItems: 'center',
          px: { xs: 2, md: 4, lg: 6 },
        }}
      >
        <Box>版本：v1.0.0</Box>

        <Box>更新日期：{BUILD_DATE}</Box>
      </Box>
    </footer>
  );
}
