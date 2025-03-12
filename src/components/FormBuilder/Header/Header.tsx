import React from "react";
import { Box, Typography, AppBar, Toolbar, IconButton } from "@mui/material";

export const Header: React.FC = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "rgb(118, 118, 118)",
        boxShadow: "0 2px 4px rgba(86, 14, 158, 0.2)",
        border: "1px solid #ccc",
        width: "100%",
        height: "10%",
      }}
    >
    <Typography sx={{ textAlign: "center", fontSize: "20px", fontWeight: "800"}}>Form Builder</Typography>
    </AppBar>
  );
};

export default Header;
