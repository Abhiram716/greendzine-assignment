import InfoIcon from "@mui/icons-material/Info";
import {
  Avatar,
  Badge,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import React from "react";

const EmployeeAvatar = ({ employees }) => {
  return (
    <Box>
      <ImageList sx={{ width: 500, height: 500 }}>
        {employees.map((employee) => {
          return (
            <Box>
              <ImageListItem>
                <Avatar
                  src={employee.avatar}
                  sx={{ height: 150, width: 200, borderRadius: 4 }}
                  variant={"square"}
                />
                <ImageListItemBar
                  sx={{ width: 200, borderRadius: "0px  0px 20px 20px" }}
                  title={employee.first_name}
                  subtitle={employee.email}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${employee.first_name} ${employee.last_name}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            </Box>
          );
        })}
      </ImageList>
    </Box>
  );
};

export default EmployeeAvatar;
