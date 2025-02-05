import { Upload } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { useEffect, useState } from 'react';
import '@/styles/ToTopButton.scss';

export default function ToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Tooltip title="回到上方" placement="right" arrow>
      <IconButton
        className="to-top-button"
        sx={{
          position: 'fixed',
          top: { xs: 20, lg: 'auto', xl: 'auto' },
          right: { xs: '50%', lg: 55, xl: 65 },
          bottom: { xs: 'auto', lg: 30, xl: 30 },
          transform: { xs: 'translateX(50%)' },
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        }}
        onClick={scrollToTop}
      >
        <Upload sx={{ color: '#ffffff', opacity: 0.7, fontSize: { xs: 30, sm: 30, md: 35 } }} />
      </IconButton>
    </Tooltip>
  );
}
