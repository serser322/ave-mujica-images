import { BaseImage } from '@/type';
import '@/styles/ImageItem.scss';
import Box from '@mui/material/Box';
import { IconButton, Tooltip, Zoom } from '@mui/material';
import { ContentCopy, Download } from '@mui/icons-material';
import ImageIconButton from './ImageIconButton';

interface ImageItemProps {
  image: BaseImage;
}

export default function ImageItem({ image }: ImageItemProps) {
  const url = new URL(`../assets/${image.name}.jpg`, import.meta.url).href;

  return (
    <>
      <Tooltip
        title={
          <Box
            sx={{
              color: '#fff',
              fontSize: '1.2rem',
            }}
          >
            {image.name}
          </Box>
        }
        // placement="top"
        arrow
        slots={{
          transition: Zoom,
        }}
      >
        <Box className="image-item-wrapper">
          <img style={{ width: '100%', height: 'auto' }} src={url} alt={image.name} />
          <Box className="image-item-overlay">
            <Box className="buttons">
              <ImageIconButton
                title="複製"
                icon={
                  <ContentCopy
                    sx={{
                      fontSize: {
                        sm: '1.8rem',
                        md: '2.0rem',
                        lg: '2.2rem',
                      },
                    }}
                  />
                }
              />
              <ImageIconButton
                title="下載"
                icon={
                  <Download
                    sx={{
                      fontSize: {
                        sm: '1.8rem',
                        md: '2.0rem',
                        lg: '2.2rem',
                      },
                    }}
                  />
                }
              />
            </Box>
          </Box>
        </Box>
      </Tooltip>
    </>
  );
}
