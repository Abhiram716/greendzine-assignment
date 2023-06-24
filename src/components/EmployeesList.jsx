import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import EmployeeAvatar from "./EmployeeAvatar";
import Spinner from "./Spinner";

const EmployeesList = ({ searchQuery }) => {
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

  const filteredEmployees = employees.filter((employee) =>
    employee.first_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <EmployeeAvatar employees={filteredEmployees} />
      </Box>
    );
  }
};

export default EmployeesList;
