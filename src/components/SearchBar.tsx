import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { debounce } from 'lodash';
import '@/styles/SearchBar.scss';
import { ChangeEvent, useState } from 'react';

interface SearchBarProps {
  onSearch: (keyword: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [keyword, setKeyword] = useState('');

  const debouncedSearchAll = debounce(() => {
    onSearch('');
  }, 200);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.value.trim() !== '') {
      setKeyword(e.target.value.trim());
    } else {
      setKeyword(e.target.value.trim());
      debouncedSearchAll();
    }
  };
  return (
    <>
      <Box className="search-bar" sx={{ display: 'flex', my: 2 }}>
        <TextField
          variant="outlined"
          color="primary"
          placeholder="請輸入關鍵字..."
          fullWidth
          name="search"
          onChange={(e) => {
            inputChangeHandler(e);
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              onSearch(keyword);
            }
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="button" onClick={() => onSearch(keyword)}>
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
