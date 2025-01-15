import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

interface SearchBarProps {
  onChange: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar({ onChange, onSearch }: SearchBarProps) {
  return (
    <>
      <Box sx={{ display: 'flex', my: 2 }}>
        <TextField
          variant="outlined"
          placeholder="請輸入關鍵字，如「春日影」、「收入太少」..."
          fullWidth
          name="search"
          onChange={(e) => {
            onChange(e.target.value.trim());
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              onSearch();
            }
          }}
          //   slotProps={{
          //     input: {
          //       startAdornment: (
          //         <InputAdornment position="start">
          //           <SearchIcon />
          //         </InputAdornment>
          //       ),
          //     },
          //   }}
        />
        <Button onClick={onSearch}>
          <SearchIcon />
        </Button>
      </Box>
    </>
  );
}
