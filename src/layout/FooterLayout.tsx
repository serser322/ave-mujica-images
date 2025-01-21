import Box from '@mui/material/Box';
import GitHubButton from 'react-github-btn';
import '@/styles/FooterLayout.scss';

export default function FooterLayout() {
  return (
    <footer>
      <Box>
        <GitHubButton
          href="https://github.com/serser322/ave-mujica-images"
          data-color-scheme="no-preference: light; light: light; dark: dark_dimmed;"
          data-icon="octicon-star"
          data-size="large"
          aria-label="Star serser322/ave-mujica-images on GitHub"
        >
          Star
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
        <Box>版本：{APP_VERSION}</Box>
        <Box>更新日期：{BUILD_DATE}</Box>
      </Box>
    </footer>
  );
}
