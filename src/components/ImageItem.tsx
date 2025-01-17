import { useState } from 'react';
import { BaseImage } from '@/type';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '@/styles/ImageItem.scss';
import Box from '@mui/material/Box';
import { ContentCopy, Download } from '@mui/icons-material';
import ImageIconButton from './ImageIconButton';
import { Skeleton } from '@mui/material';

interface ImageItemProps {
  image: BaseImage;
}

export default function ImageItem({ image }: ImageItemProps) {
  const url = new URL(`../assets/${image.name}.jpg`, import.meta.url).href;

  const [isLoaded, setIsLoaded] = useState(false);
  const copyImageToClipboard = async () => {
    const img = new Image();
    // img.crossOrigin = 'anonymous'; // Use this if the image is served from another domain
    img.src = url;
    img.onload = async () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      (ctx as CanvasRenderingContext2D).drawImage(img, 0, 0);
      canvas.toBlob(async (blob) => {
        try {
          await navigator.clipboard.write([
            new ClipboardItem({
              'image/png': blob as Blob,
            }),
          ]);
          console.log('Image copied to clipboard');
        } catch (error) {
          console.error('Failed to copy image to clipboard', error);
        }
      }, 'image/png');
    };
  };

  const downloadImage = () => {
    const a = document.createElement('a');
    a.href = url;
    a.download = `${image.name}.png`;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
  };

  return (
    <>
      {!isLoaded ? (
        <Skeleton variant="rounded" animation="wave" width={'100%'} height={60} />
      ) : (
        <Box className="image-item-wrapper">
          <img
            style={{ width: '100%', height: 'auto' }}
            data-src={url}
            alt={image.name}
            className="lazyload"
            onLoad={() => {
              setIsLoaded(true);
            }}
          />
          <Box className="image-item-overlay">
            <Box className="buttons">
              <ImageIconButton title="複製" icon={<ContentCopy />} onClick={copyImageToClipboard} />
              <ImageIconButton title="下載" icon={<Download />} onClick={downloadImage} />
            </Box>
            <Box className="image-item-name">{image.name}</Box>
          </Box>
        </Box>
      )}
    </>
  );
}
