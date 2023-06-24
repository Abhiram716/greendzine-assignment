import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";

const SearchBar = ({ searchQuery, handleSearchQueryChange }) => {
  return (
    <Box sx={{ width: 700, mt: 20, textAlign: "center" }}>
      <TextField
        fullWidth
        label="Search"
        type="search"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
