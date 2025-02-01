import { BaseImage } from '@/type';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '@/styles/ImageItem.scss';
import Box from '@mui/material/Box';
import { ContentCopy, Download } from '@mui/icons-material';
import ImageIconButton from './ImageIconButton';
import { useDispatch } from 'react-redux';
import { setNotification } from '@/layout/contentLayoutSlice';

interface ImageItemProps {
  image: BaseImage;
}

export default function ImageItem({ image }: ImageItemProps) {
  const dispatch = useDispatch();
  const placeholderUrl = new URL(`../assets/black.jpg`, import.meta.url).href;
  const url = new URL(`../assets/${image.name}.webp`, import.meta.url).href;

  const copyImageToClipboard = async () => {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // Use this if the image is served from another domain
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
          dispatch(
            setNotification({
              severity: 'success',
              message: `已複製圖片`,
            })
          );
        } catch (error) {
          console.error('Failed to copy image to clipboard', error);
        }
      }, 'image/png');
    };
  };

  const downloadImage = () => {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // Needed to avoid tainting the canvas
    img.src = url;
    img.onload = async () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      (ctx as CanvasRenderingContext2D).drawImage(img, 0, 0);

      canvas.toBlob((blob) => {
        const newImgUrl = URL.createObjectURL(blob as Blob);

        const a = document.createElement('a');
        a.href = newImgUrl;
        a.download = `${image.name}.png`;
        document.body.appendChild(a);
        a.click();
        // dispatch(
        //   setNotification({
        //     severity: 'success',
        //     message: `已下載PNG圖檔`,
        //   })
        // );
        document.body.removeChild(a);

        // Clean up the object URL
        URL.revokeObjectURL(newImgUrl);
      }, 'image/png');
    };
  };

  return (
    <>
      <Box className="image-item-wrapper">
        <img
          style={{ width: '100%', height: 'auto' }}
          data-src={url}
          alt={image.name}
          src={placeholderUrl}
          className="lazyload"
        />

        <Box className="image-item-overlay">
          <Box className="buttons">
            <ImageIconButton title="複製" icon={<ContentCopy />} onClick={copyImageToClipboard} />
            <ImageIconButton title="下載" icon={<Download />} onClick={downloadImage} />
          </Box>
          <Box className="image-item-name">{image.name}</Box>
        </Box>
      </Box>
    </>
  );
}
