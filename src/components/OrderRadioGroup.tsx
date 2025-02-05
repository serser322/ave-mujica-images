import { ChangeEvent, useEffect } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { latestEpisodeSelector, setOrder, setDefaultImageList } from '@/layout/contentLayoutSlice';
import { BaseImage } from '@/type';

export function OrderRadioGroup() {
  const dispatch = useDispatch();
  const order = useSelector((state: RootState) => state.contentLayout.order);
  const latestEpisodeNum = useSelector(latestEpisodeSelector);
  const defaultImageList = useSelector((state: RootState) => state.contentLayout.defaultImageList);
  const orderRadioChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setOrder(event.target.value));
  };

  useEffect(() => {
    if (order === 'oldest') {
      //   localStorage.setItem('order', 'oldest');
      //   defaultImageList.sort((a, b) => a.episode - b.episode);

      const newList = [] as BaseImage[];
      for (let i = 1; i <= latestEpisodeNum; i++) {
        defaultImageList.forEach((item) => {
          if (item.episode === i) {
            newList.push(item);
          }
        });
      }
      dispatch(setDefaultImageList(newList));
    } else {
      const newList = [] as BaseImage[];
      for (let i = latestEpisodeNum; i >= 1; i--) {
        defaultImageList.forEach((item) => {
          if (item.episode === i) {
            newList.push(item);
          }
        });
      }
      dispatch(setDefaultImageList(newList));
    }
  }, [order]);
  return (
    <FormControl sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <FormLabel id="order-radio-group-label" sx={{ mr: 2 }}>
        排序方式
      </FormLabel>
      <RadioGroup row aria-labelledby="order-radio-group-label" onChange={orderRadioChangeHandler}>
        <FormControlLabel value="oldest" control={<Radio />} label="首集" />
        <FormControlLabel value="newest" control={<Radio />} label="最新" />
      </RadioGroup>
    </FormControl>
  );
}
