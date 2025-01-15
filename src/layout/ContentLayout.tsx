import { ReactNode } from 'react';
import { Box } from '@mui/material';

export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Box sx={{ p: 2 }}>{children}</Box>
    </>
  );
}
