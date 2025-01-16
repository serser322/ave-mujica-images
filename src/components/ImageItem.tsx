import { BaseImage } from '@/type';
import '@/styles/ImageItem.scss';
import Box from '@mui/material/Box';
import { ContentCopy, Download } from '@mui/icons-material';
import ImageIconButton from './ImageIconButton';

interface ImageItemProps {
  image: BaseImage;
}

export default function ImageItem({ image }: ImageItemProps) {
  const url = new URL(`../assets/${image.name}.jpg`, import.meta.url).href;

  return (
    <>
      {/* <Tooltip
        title={
          <Box
            sx={{
              color: '#fff',
              fontSize: '0.8rem',
            }}
          >
            {image.name}
          </Box>
        }
        
        arrow
        slots={{
          transition: Zoom,
        }}
      > */}
      <Box className="image-item-wrapper">
        <img style={{ width: '100%', height: 'auto' }} src={url} alt={image.name} />
        <Box className="image-item-overlay">
          <Box className="buttons">
            <ImageIconButton title="複製" icon={<ContentCopy />} />
            <ImageIconButton title="下載" icon={<Download />} />
          </Box>
          <Box className="image-item-name">{image.name}</Box>
        </Box>
      </Box>
      {/* </Tooltip> */}
    </>
  );
}
