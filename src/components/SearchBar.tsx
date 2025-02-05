import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { setKeyword } from '@/layout/contentLayoutSlice';
import '@/styles/SearchBar.scss';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>('');

  const debouncedSetKeyword = debounce((keyword: string) => {
    dispatch(setKeyword(keyword));
  }, 200);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    debouncedSetKeyword(value);
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
