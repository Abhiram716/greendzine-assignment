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
      // <Box sx={{ mt: 20,ml:9 }}>
      //   <Grid
      //     container
      //     direction="row"
      //     alignItems="center"
      //     justifyContent="center"
      //     rowSpacing={3}
      //     columnGap={1}
      //   >
      //     {employees.map((employee) => {
      //       return (
      //         <Grid item xs={3} key={employee.id}>
      //           <EmployeeAvatar employeedata={employee} />
      //         </Grid>
      //       );
      //     })}
      //   </Grid>
      // </Box>

      // ------------- Title bar below image----------------
      // <Box sx={{height:500}}>
      //   <ImageList >
      //     {employees.map((employee) => {
      //       return (
      //         <ImageListItem key={employee.id} sx={{m:4}}>
      //           <img src={employee.avatar} loading="lazy" alt="img" />
      //           <ImageListItemBar
      //             title={employee.first_name}
      //             // subtitle={<span>{employee.first_name}</span>}
      //             position="below"
      //           />
      //         </ImageListItem>
      //       );
      //     })}
      //   </ImageList>
      // </Box>
      <Box>
        <EmployeeAvatar employees={ employees } />
      </Box>
    );
  }
};

export default EmployeesList;
