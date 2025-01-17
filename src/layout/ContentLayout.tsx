import { ReactNode } from 'react';
import { Box } from '@mui/material';

export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Box sx={{ p: 0, px: { xs: 2, md: 4, lg: 6 } }}>{children}</Box>
    </>
  );
}
