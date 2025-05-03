import { ChangeEvent, useEffect } from 'react';
import { ToggleButton, ToggleButtonGroup, Tooltip, useMediaQuery } from '@mui/material';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setOrder, setAveMujicaImages } from '@/layout/contentLayoutSlice';
import { Sort } from '@mui/icons-material';

export function SortToggleButtons() {
  const dispatch = useDispatch();
  const order = useSelector((state: RootState) => state.contentLayout.order);
  const aveMujicaImages = useSelector((state: RootState) => state.contentLayout.aveMujicaImages);
  const matches = useMediaQuery('(min-width:576px)');
  const sortChangeHandler = (_event: ChangeEvent<unknown>, value: string) => {
    if (!value) return;
    dispatch(setOrder(value));
  };

  useEffect(() => {
    const imageList = [...aveMujicaImages];
    if (order === 'oldest') {
      //   localStorage.setItem('order', 'oldest');
      imageList.sort((a, b) => a.episode - b.episode);

      dispatch(setAveMujicaImages(imageList));
    } else {
      imageList.sort((a, b) => b.episode - a.episode);
      dispatch(setAveMujicaImages(imageList));
    }
  }, [order]);
  return (
    <>
      {!matches ? (
        <ToggleButtonGroup value={order} color="primary" exclusive onChange={sortChangeHandler}>
          {order === 'oldest' ? (
            <Tooltip arrow title="最新優先 " placement="bottom">
              <ToggleButton value="newest" aria-label="newest first">
                <Sort />
              </ToggleButton>
            </Tooltip>
          ) : (
            <Tooltip arrow title="首集優先" placement="bottom">
              <ToggleButton value="oldest" aria-label="oldest first">
                <Sort sx={{ transform: 'scaleY(-1)' }} />
              </ToggleButton>
            </Tooltip>
          )}
        </ToggleButtonGroup>
      ) : (
        <ToggleButtonGroup value={order} color="primary" exclusive onChange={sortChangeHandler}>
          <Tooltip arrow title="首集優先" placement="bottom">
            <ToggleButton value="oldest" aria-label="oldest first">
              <Sort sx={{ transform: 'scaleY(-1)' }} />
            </ToggleButton>
          </Tooltip>
          <Tooltip arrow title="最新優先 " placement="bottom">
            <ToggleButton value="newest" aria-label="newest first">
              <Sort />
            </ToggleButton>
          </Tooltip>
        </ToggleButtonGroup>
      )}
    </>
  );
}
