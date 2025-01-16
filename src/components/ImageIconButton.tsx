import { IconButton, Tooltip, Zoom } from '@mui/material';
import { ReactNode } from 'react';

interface ImageIconButtonProps {
  title: string;
  icon: ReactNode;
  onClick: () => void;
}
export default function ImageIconButton({ title, icon, onClick }: ImageIconButtonProps) {
  return (
    <Tooltip
      arrow
      title={title}
      placement="bottom"
      slots={{
        transition: Zoom,
      }}
    >
      <IconButton
        sx={{
          //   border: '1px solid #fff',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          color: '#fff',
          '&:hover': {
            backgroundColor: 'rgba(255, 200, 0, 0.3)', // Red hover background
            color: 'yellow',
          },
        }}
        onClick={onClick}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
}
