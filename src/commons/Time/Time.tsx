import React from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Box, Typography, TextField } from "@mui/material";

export const Time: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "4% 0 5% 0%",
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
          marginLeft: "4%",
        }}
      >
        <Typography>Label Of Time</Typography>
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker label="hh:mm aa" />
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default Time;
