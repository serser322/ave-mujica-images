import { useEffect } from 'react';
import { Slide, Snackbar, Alert, AlertColor } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setNotificationOpen, setNotification } from '@/layout/contentLayoutSlice';

function NotificationAlert() {
  const dispatch = useDispatch();
  const isNotificationOpen = useSelector((store: RootState) => store.contentLayout.isNotificationOpen);
  const notification = useSelector((store: RootState) => store.contentLayout.notification);

  const closeNotificationHandler = () => {
    dispatch(setNotificationOpen(false));
    setTimeout(() => {
      setNotification({ severity: 'success', message: '' });
    }, 300);
  };

  useEffect(() => {
    if (notification.message) {
      dispatch(setNotificationOpen(true));
    }
  }, [notification]);
  return (
    <>
      <Snackbar
        open={isNotificationOpen}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        TransitionComponent={Slide}
        onClose={closeNotificationHandler}
        onClick={closeNotificationHandler}
      >
        <Alert severity={notification.severity as AlertColor} sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default NotificationAlert;
