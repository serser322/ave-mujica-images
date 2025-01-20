import Box from '@mui/material/Box';
import GitHubButton from 'react-github-btn';
import '@/styles/FooterLayout.scss';

export default function FooterLayout() {
  return (
    <footer>
      <Box>
        <GitHubButton
          href="https://github.com/buttons/github-buttons"
          data-color-scheme="no-preference: light; light: dark_high_contrast; dark: dark_dimmed;"
          data-icon="octicon-star"
          data-size="large"
          aria-label="Star buttons/github-buttons on GitHub"
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
        <Box>版本：v1.0.0</Box>

        <Box>更新日期：{BUILD_DATE}</Box>
      </Box>
    </footer>
  );
}
