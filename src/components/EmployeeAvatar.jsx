import { Avatar, Box } from '@mui/material';
import React from "react";


const EmployeeAvatar = ({ employeedata }) => {
  const { id, first_name, email, avatar } = employeedata;
	return <Box>
		<Avatar src={avatar} sx={{ height: 150, width: 200, borderRadius: 4 }} variant={ 'square' } />
	</Box>;
};

export default EmployeeAvatar;
