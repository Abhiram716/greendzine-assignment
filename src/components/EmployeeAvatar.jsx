import { Avatar, Badge, Box, Grid, Typography } from "@mui/material";
import React from "react";

const EmployeeAvatar = ({ employees }) => {
  return (
    <Grid container spacing={1} >
      {employees.map((employee) => (
        <Grid item xs={12} sm={6} md={4} key={employee.id}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Badge
              badgeContent={
                <Typography variant="caption">{employee.id}</Typography>
              }
              color="primary"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 140,
                  height: 140,
                  border: "1px solid grey",
                  borderRadius: 4,
                  position: "relative",
                }}
              >
                <Avatar
                  src={employee.avatar}
                  alt={employee.firstName}
                  variant="square"
                  sx={{ width: 120, height: 120, borderRadius: 4 }}
                />
              </Box>
            </Badge>
            <Typography variant="body1">{employee.first_name}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default EmployeeAvatar;
