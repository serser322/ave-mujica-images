import { ChangeEvent, useState } from 'react';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { debounce } from 'lodash';
import '@/styles/SearchBar.scss';
import { setKeyword } from '@/layout/contentLayoutSlice';

export default function SearchBar() {
  const dispatch = useDispatch();
  //   const keyword = useSelector((state: RootState) => state.contentLayout.keyword);
  const [inputValue, setInputValue] = useState<string>('');

  //   const debouncedSetKeyword = debounce((keyword: string) => {
  //     //   onSearch(keyword);
  //     dispatch(setKeyword(keyword));
  //   }, 200);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    dispatch(setKeyword(value));
    // debouncedSetKeyword(value);
  };
  return (
    <>
      <Box className="search-bar" sx={{ display: 'flex' }}>
        <TextField
          variant="outlined"
          color="primary"
          value={inputValue}
          placeholder="請輸入關鍵字..."
          fullWidth
          name="search"
          onChange={(e) => {
            inputChangeHandler(e);
          }}
          //   onKeyUp={(e) => {
          //     if (e.key === 'Enter') {
          //       onSearch(keyword);
          //     }
          //   }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="button">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
    </>
  );
}
