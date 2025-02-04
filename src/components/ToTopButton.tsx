import { Upload } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

export default function ToTopButton() {
  return (
    <Tooltip title="回到上方" placement="right" arrow>
      <IconButton
        className="to-top-button"
        sx={{
          position: 'fixed',
          right: { xs: 20, md: 25 },
          bottom: { xs: 20, md: 25 },
          opacity: 0.7,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Upload sx={{ color: '#fbff00', opacity: 0.7, fontSize: { xs: 20, sm: 25, md: 35 } }} />
      </IconButton>
    </Tooltip>
  );
}
