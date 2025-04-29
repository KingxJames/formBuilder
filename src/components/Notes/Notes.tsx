import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";

export const Notes: React.FC = () => {
  const [isDeleted, setIsDeleted] = useState(false);

  // Delete functionality
  const handleDelete = () => {
    setIsDeleted(true);
    // You can also perform additional actions here, like removing the component from a list
  };

  // If the component is deleted, return null to remove it from the DOM
  if (isDeleted) {
    return null;
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "35vw", // Set a fixed height to ensure centering works
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        borderRadius: "5px",
        position: "relative",
        margin: "auto",
        alignItems: "center",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "95%",
          position: "relative",
          marginBottom: "0%",
          padding: "4%",
        }}
      >
        <Typography>Notes</Typography>
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
