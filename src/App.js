import { Box } from "@mui/material";
import "./App.css";
import { EmployeesList, SearchBar } from "./components";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <SearchBar />
      </Box>
      <EmployeesList />
    </Box>
  );
}

export default App;
