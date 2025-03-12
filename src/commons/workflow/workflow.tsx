import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import DeleteIcon from "@mui/icons-material/Delete";

export const Workflow: React.FC = () => {
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
        margin: "auto"
        
      }}
    >
      {/* Top Section: Input Field with Icons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          padding: "2%",
          marginTop: "4%",
        }}
      >
        <TextField variant="standard" placeholder="Heading" sx={{ width: "85%" }} />
        <Box sx={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}>
          <DragIndicatorIcon sx={{ cursor: "grab", marginRight: "8px" }} />
          <DeleteIcon sx={{ cursor: "pointer", color: "red" }} />
        </Box>
      </Box>

      {/* Centered Drop Field Box */}
      <Box
        sx={{
          display: "flex",
          flexGrow: 1, // Makes this box take up the remaining space
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            // border: "1px solid black",
            padding: "3%",
            width: "90%",
            cursor: "pointer",
          }}
        >
          <Typography>+ Drop Field</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Workflow;
