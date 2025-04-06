import { BaseImage } from '@/type';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '@/styles/components/ImageItem.scss';
import Box from '@mui/material/Box';
import { ContentCopy, Download, InsertLink } from '@mui/icons-material';
import ImageIconButton from './ImageIconButton';
import { useDispatch, useSelector } from 'react-redux';
import { setNotification } from '@/layout/contentLayoutSlice';
import { RootState } from '@/store/store';

interface ImageItemProps {
  image: BaseImage;
}

export default function ImageItem({ image }: ImageItemProps) {
  const dispatch = useDispatch();
  const currentTab = useSelector((state: RootState) => state.contentLayout.currentTab);
  const placeholderUrl = new URL(`../../assets/black.webp`, import.meta.url).href;
  const webpUrl = new URL(`../../assets/webp/${currentTab}/${image.name}.webp`, import.meta.url).href;
  const jpgUrl = new URL(`../../assets/jpg/${currentTab}/${image.name}.jpg`, import.meta.url).href;

  const copyImageToClipboard = async () => {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // Use this if the image is served from another domain
    img.src = webpUrl;
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
    const a = document.createElement('a');
    a.href = jpgUrl;
    a.download = `${image.name.split('_')[0]}.jpg`;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
  };

  const copyLinkToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(jpgUrl);
      dispatch(
        setNotification({
          severity: 'success',
          message: `已複製圖片連結`,
        })
      );
    } catch (error) {
      console.error('Failed to copy link to clipboard', error);
    }
  };

  return (
    <>
      <Box className="image-item-wrapper" data-expand="-500">
        <img
          style={{ width: '100%', height: 'auto' }}
          data-src={webpUrl}
          alt={image.name}
          src={placeholderUrl}
          className="lazyload"
        />

        <Box className="image-item-overlay">
          <Box className="buttons">
            <ImageIconButton title="複製圖片" icon={<ContentCopy />} onClick={copyImageToClipboard} />
            <ImageIconButton title="下載JPG檔" icon={<Download />} onClick={downloadImage} />
            <ImageIconButton title="圖片連結複製" icon={<InsertLink />} onClick={copyLinkToClipboard} />
          </Box>
          <Box className="image-item-name">{image.name.split('_')[0]}</Box>
        </Box>
      </Box>
    </>
  );
}
