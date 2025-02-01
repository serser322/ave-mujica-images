import { ReactNode, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import NotificationAlert from '@/components/NotificationAlert';
import BaseDialog from '@/components/BaseDialog';

export default function ContentLayout({ children }: { children: ReactNode }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const userAgent = navigator.userAgent;

  const checkBrowser = () => {
    if (window.innerWidth >= 768) return;
    if (userAgent.indexOf('FBAN') > -1 || userAgent.indexOf('FBAV') > -1) {
      setDialogMessage('因Facebook瀏覽器支援較差，建議改用外部瀏覽器(Chrome、Safari)以獲較佳體驗。');
      setDialogOpen(true);
    }
    if (userAgent.indexOf('Line') > -1) {
      setDialogMessage('因Line瀏覽器支援較差，建議改用外部瀏覽器(Chrome、Safari)以正常下載圖片。');
      setDialogOpen(true);
    }
  };

  useEffect(() => {
    checkBrowser();
  }, []);

  return (
    <>
      <Box sx={{ p: 0, px: { xs: 2, md: 4, lg: 6 } }}>{children}</Box>
      <NotificationAlert />
      <BaseDialog
        open={dialogOpen}
        dialogTitle="提示"
        onClose={() => {
          setDialogOpen(false);
        }}
      >
        {dialogMessage}
      </BaseDialog>
    </>
  );
}
