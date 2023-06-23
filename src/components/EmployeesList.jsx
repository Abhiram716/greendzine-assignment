import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import EmployeeAvatar from "./EmployeeAvatar";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const fetchData = async () => {
    const res = await fetch("https://reqres.in/api/users?page=2");
    let data = await res.json();
    setEmployees(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        {employees.map((employee) => {
          if (employee.id === 9 || employee.id === 12) {
            return (
              <Grid item xs={0} key={employee.id}>
                <EmployeeAvatar employeedata={employee} />
              </Grid>
            );
          }
          return (
            <Grid item xs={4} key={employee.id}>
              <EmployeeAvatar employeedata={employee} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default EmployeesList;
