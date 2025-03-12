import React from "react";
import { TextField, Box, Typography } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import DeleteIcon from "@mui/icons-material/Delete";

export const TextFieldComponent: React.FC = () => {
  return (
    <Box
      sx={{
        width: "70%",
        height: "30vw", // Set a fixed height to ensure centering works
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        borderRadius: "5px",
        position: "relative",
        margin: "auto",
        padding: "2%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          marginTop: "4%",
          marginBottom: "4%",
        }}
      >
        <Typography> Text Field</Typography>

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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
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
