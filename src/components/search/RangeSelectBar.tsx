import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import {
  mujicaLatestEpisode,
  myGOLatestEpisode,
  setAveMujicaEpisode,
  setMyGOEpisode,
} from '@/layout/contentLayoutSlice';
import { Movie } from '@mui/icons-material';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

export default function RangeSelectBar() {
  const dispatch = useDispatch();
  const currentTab = useSelector((state: RootState) => state.contentLayout.currentTab);
  const aveMujicaEpisode = useSelector((state: RootState) => state.contentLayout.aveMujicaEpisode);
  const myGOEpisode = useSelector((state: RootState) => state.contentLayout.myGOEpisode);
  const mujicaEpisodes = [0, ...Array.from({ length: mujicaLatestEpisode }, (_, index) => index + 1).reverse()];
  const myGoEpisodes = [0, ...Array.from({ length: myGOLatestEpisode }, (_, index) => index + 1).reverse()];
  //   const rangeOptions = [0, ...episodes];

  const selectChangeHandler = (event: SelectChangeEvent<number>) => {
    if (currentTab === 'mygo') dispatch(setMyGOEpisode(event.target.value as number));
    if (currentTab === 'ave-mujica') dispatch(setAveMujicaEpisode(event.target.value as number));
  };

  return (
    <>
      <FormControl fullWidth sx={{ backgroundColor: 'rgba(66, 66, 66, 0.7)' }}>
        <InputLabel id="range-select-label">{`查看 ${currentTab === 'ave-mujica' ? 'Ave Mujica' : 'MyGO'} 集數`}</InputLabel>
        <Select
          labelId="range-select-label"
          value={currentTab === 'ave-mujica' ? aveMujicaEpisode : myGOEpisode}
          label={`查看 ${currentTab === 'ave-mujica' ? 'Ave Mujica' : 'MyGO'} 集數`}
          onChange={selectChangeHandler}
          renderValue={(value) => (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Movie fontSize="small" sx={{ mr: 1.5 }} />
              <span>{value === 0 ? '全 部' : `第 ${value} 集`}</span>
            </Box>
          )}
        >
          {(currentTab === 'ave-mujica' ? mujicaEpisodes : myGoEpisodes).map((item) => (
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
