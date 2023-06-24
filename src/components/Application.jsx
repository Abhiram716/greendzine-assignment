import React, { useState} from "react";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import EmployeesList from "./EmployeesList";

const Application = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchQueryChange = (event) => {
		setSearchQuery(event.target.value);
	}

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SearchBar
        searchQuery={searchQuery}
        handleSearchQueryChange={handleSearchQueryChange}
      />
      <EmployeesList searchQuery={searchQuery} />
    </Box>
  );
};

export default Application;
