import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { latestEpisode, setEpisode } from '@/layout/contentLayoutSlice';
import { Movie } from '@mui/icons-material';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

export default function RangeSelectBar() {
  const dispatch = useDispatch();
  const episode = useSelector((state: RootState) => state.contentLayout.episode);
  const episodes = Array.from({ length: latestEpisode }, (_, index) => index + 1).reverse();
  const rangeOptions = [0, ...episodes];

  const selectChangeHandler = (event: SelectChangeEvent<number>) => {
    dispatch(setEpisode(event.target.value as number));
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="range-select-label">查看特定集數</InputLabel>
        <Select
          labelId="range-select-label"
          value={episode}
          label="查看特定集數"
          onChange={selectChangeHandler}
          renderValue={(value) => (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Movie fontSize="small" sx={{ mr: 1.5 }} />
              <span>{value === 0 ? '全 部' : `第 ${value} 集`}</span>
            </Box>
          )}
        >
          {rangeOptions.map((item) => (
            <MenuItem key={item} value={item}>
              <Movie fontSize="small" sx={{ mr: 1.5 }} /> {item === 0 ? '全 部' : `第 ${item} 集`}
            </MenuItem>
          ))}
        </Select>
        {/* <Box sx={{ mt: 0.5, textAlign: 'right', fontSize: 11, fontWeight: 600, color: '#e0e0e0' }}>▲不一定要關鍵字</Box> */}
      </FormControl>
    </>
  );
}
