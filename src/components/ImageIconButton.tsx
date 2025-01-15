import { Box, IconButton, Tooltip, Zoom } from '@mui/material';
import { ReactNode } from 'react';

interface ImageIconButtonProps {
  title: string;
  icon: ReactNode;
}
export default function ImageIconButton({ title, icon }: ImageIconButtonProps) {
  return (
    <Tooltip
      arrow
      title={title}
      placement="right"
      slots={{
        transition: Zoom,
      }}
    >
      <IconButton
        sx={{
          color: '#fff',
          '&:hover': {
            backgroundColor: 'rgba(255, 200, 0, 0.2)', // Red hover background
            color: 'yellow',
          },
        }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
}
