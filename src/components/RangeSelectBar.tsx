import { useState } from 'react';
import { useSelector } from 'react-redux';
import { latestEpisodeSelector } from '@/layout/contentLayoutSlice';
import { Movie } from '@mui/icons-material';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import '@/styles/RangeSelectBar.scss';

interface RangeSelectBarProps {
  onSelectChange: (value: number) => void;
}

export default function RangeSelectBar({ onSelectChange }: RangeSelectBarProps) {
  const [range, setRange] = useState<number>(0);
  const latestEpisode = useSelector(latestEpisodeSelector);
  const episodes = Array.from({ length: latestEpisode }, (_, index) => index + 1).reverse();
  const rangeOptions = [0, ...episodes];

  const selectChangeHandler = (event: SelectChangeEvent<number>) => {
    onSelectChange(event.target.value as number);
    setRange(event.target.value as number);
  };

  return (
    <>
      <FormControl fullWidth className="range-select-bar">
        <InputLabel id="range-select-label">搜尋範圍</InputLabel>
        <Select
          labelId="range-select-label"
          value={range}
          label="搜尋範圍"
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
      </FormControl>
    </>
  );
}
