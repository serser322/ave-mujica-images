import { ChangeEvent, useEffect } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { latestEpisode, setOrder, setDefaultImageList } from '@/layout/contentLayoutSlice';
import { BaseImage } from '@/type';
import { Sort } from '@mui/icons-material';
import { revertedDefaultImageList } from '@/layout/contentLayoutSlice';

export function SortToggleButtons() {
  const dispatch = useDispatch();
  const order = useSelector((state: RootState) => state.contentLayout.order);
  const defaultImageList = useSelector((state: RootState) => state.contentLayout.defaultImageList);
  const sortChangeHandler = (event: ChangeEvent<unknown>, value: string) => {
    dispatch(setOrder(value));
    console.log(value);
  };

  useEffect(() => {
    console.log('useEffect', order);
    if (order === 'oldest') {
      //   localStorage.setItem('order', 'oldest');
      //   defaultImageList.sort((a, b) => a.episode - b.episode);
      //   const newList = [] as BaseImage[];
      //   for (let i = 1; i <= latestEpisode; i++) {
      //     defaultImageList.forEach((item) => {
      //       if (item.episode === i) {
      //         newList.push(item);
      //       }
      //     });
      //   }
      dispatch(setDefaultImageList(defaultImageList));
    } else {
      //   const newList = [] as BaseImage[];
      //   for (let i = latestEpisode; i >= 1; i--) {
      //     defaultImageList.forEach((item) => {
      //       if (item.episode === i) {
      //         newList.push(item);
      //       }
      //     });
      //   }
      dispatch(setDefaultImageList(revertedDefaultImageList));
    }
  }, [order]);
  return (
    <>
      <ToggleButtonGroup value={order} exclusive onChange={sortChangeHandler}>
        <ToggleButton value="oldest" aria-label="oldest first">
          <Sort sx={{ transform: 'scaleY(-1)' }} />
        </ToggleButton>
        <ToggleButton value="newest" aria-label="oldest first">
          <Sort />
        </ToggleButton>
      </ToggleButtonGroup>
      {/* <FormControl sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <FormLabel id="order-radio-group-label" sx={{ mr: 2 }}>
          排序方式
        </FormLabel>
        <RadioGroup row aria-labelledby="order-radio-group-label" onChange={orderRadioChangeHandler}>
          <FormControlLabel value="oldest" control={<Radio />} label="首集" />
          <FormControlLabel value="newest" control={<Radio />} label="最新" />
        </RadioGroup>
      </FormControl> */}
    </>
  );
}
