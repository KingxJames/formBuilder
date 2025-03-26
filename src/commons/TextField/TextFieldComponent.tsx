import React, { useState } from "react";
import { TextField, Box, Typography } from "@mui/material";

export const TextFieldComponent: React.FC = () => {
  const [isDeleted, setIsDeleted] = useState(false);

  if (isDeleted) {
    return null; // Return null to remove the component from the DOM
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "30vw", // Set a fixed height to ensure centering works
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        borderRadius: "5px",
        position: "relative",
        margin: "auto",
      }}
      draggable
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          marginTop: "4%",
          marginBottom: "4%",
          padding: "2%",
        }}
      >
        <Typography> Text Field</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          padding: "2%",
        }}
      >
        <TextField
          variant="standard"
          placeholder="Some description about the field"
          sx={{ width: "85%", p: "2% 0 2% 0" }}
        />

        <TextField sx={{ mt: "5%", mb: "2%" }} />
      </Box>
    </Box>
  );
};

export default TextFieldComponent;
