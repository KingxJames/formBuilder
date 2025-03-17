import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import DeleteIcon from "@mui/icons-material/Delete";

export const Time: React.FC = () => {
  return (
    <Box
      sx={{
        width: "70%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        borderRadius: "5px",
        position: "relative",
        margin: "auto",
        padding: "2%",
        alignItems: "center",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          position: "relative",
          marginBottom: "4%",
        }}
      >
        <Typography>Label Of Time</Typography>

        {/* Icons */}
        <Box
          sx={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <DragIndicatorIcon sx={{ cursor: "grab", marginRight: "8px" }} />
          <DeleteIcon sx={{ cursor: "pointer", color: "red" }} />
        </Box>
      </Box>

      {/* Input Fields */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "85%",
        }}
      >
        {/* Description Field */}
        <TextField
          variant="outlined"
          placeholder="Some description about the field"
          sx={{
            width: "100%",
            mb: 2,
          }}
        />
      </Box>
    </Box>
  );
};

export default Time;
