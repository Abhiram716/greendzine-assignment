import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import EmployeeAvatar from "./EmployeeAvatar";
import Spinner from "./Spinner";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("pending");
  const fetchData = async () => {
    setTimeout(async () => {
      const res = await fetch("https://reqres.in/api/users?page=2");
      let data = await res.json();
      setEmployees(data.data);
      setFetchStatus("success");
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (fetchStatus === "pending") {
    return (
      <Box sx={{ marginTop: 20 }}>
        <Spinner />
      </Box>
    );
  } else {
    return (
      <Box sx={{ mt: 4 }}>
        <EmployeeAvatar employees={employees} />
      </Box>
    );
  }
};

export default EmployeesList;
