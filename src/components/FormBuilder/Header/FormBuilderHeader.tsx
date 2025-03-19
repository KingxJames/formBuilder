import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UBLogoWhite from "../../../images/UBLogoWhite.png";

export const FormBuilderHeader: React.FC = () => {
  return (
    <Box
      sx={{
        // ml: "-0.8%",
        // mt: "-0.8%",
        width: "100vw",
        height: "2vh",
        backgroundColor: "rgb(118, 46, 121)",
        color: "white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        padding: "2%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Logo and Title */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img src={UBLogoWhite} alt="logo" width="15%" height="100%" />
        <Typography sx={{ fontSize: "20px" }}> UB Form Builder</Typography>
      </Box>
    </Box>
  );
};

export default FormBuilderHeader;
