import React from "react";
import { TextField, InputAdornment, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Box
      width={"1000px"}
      marginTop={"50px"}
      textAlign="center"
    >
      <TextField
        fullWidth
        label="Search"
        type="search"
        variant="outlined"
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
