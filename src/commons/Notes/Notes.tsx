import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import DeleteIcon from "@mui/icons-material/Delete";

export const Notes: React.FC = () => {
  return (
    <Box
      sx={{
        width: "70%",
        height: "auto", // Ensures height adapts to viewport width
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
        <Typography>Notes</Typography>

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
            mb: 2, // Adds margin below
          }}
        />

        {/* Multiline Text Field */}
        <TextField
          multiline
          maxRows={8}
          variant="outlined"
          sx={{
            width: "100%",
            minHeight: "120px", // Ensures minimum height
            "& .MuiInputBase-root": {
              minHeight: "120px", // Makes input box larger
            },
            "& .MuiInputBase-input": {
              minHeight: "120px", // Ensures text area fits
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Notes;
