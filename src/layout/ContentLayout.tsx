import { ReactNode, useEffect } from 'react';
import { Box } from '@mui/material';
import NotificationAlert from '@/components/NotificationAlert';

export default function ContentLayout({ children }: { children: ReactNode }) {
  const userAgent = navigator.userAgent;

  const checkBrowser = () => {
    if (window.innerWidth >= 768) return;
    if (userAgent.indexOf('FBAN') > -1 || userAgent.indexOf('FBAV') > -1) {
      alert('因Facebook瀏覽器支援較差，建議改用外部瀏覽器(Chrome、Safari)以獲較佳體驗。');
    }
    if (userAgent.indexOf('Line') > -1) {
      alert('因Line瀏覽器支援較差，建議改用外部瀏覽器(Chrome、Safari)以正常下載圖片。');
    }
  };

  useEffect(() => {
    checkBrowser();
  }, []);

  return (
    <>
      <Box sx={{ p: 0, px: { xs: 2, md: 4, lg: 6 } }}>{children}</Box>
      <NotificationAlert />
    </>
  );
}
