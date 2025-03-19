import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export const UBCheckBox: React.FC = () => {
  const [checkListOptions, setCheckListOptions] = useState([
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
  ]);

  // Handle label change
  const handleLabelChange = (id: number, newLabel: string) => {
    setCheckListOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, label: newLabel } : option
      )
    );
  };

  // Add a new check list option
  const addCheckListOption = () => {
    setCheckListOptions([
      ...checkListOptions,
      { id: Date.now(), label: `Option ${checkListOptions.length + 1}` },
    ]);
  };

  // Remove a check list option
  const removeCheckListOption = (id: number) => {
    setCheckListOptions(checkListOptions.filter((option) => option.id !== id));
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "4% 0 2% 0%",
        margin: "auto",
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
        <Typography>Check Box</Typography>

        {/* Icons */}
        <Box
          sx={{
            position: "absolute",
            right: "5%",
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
            padding: "3%",
          }}
        />

        {/* CheckList */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "3%",
          }}
        >
          {checkListOptions.map((option) => (
            <Box
              key={option.id}
              sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <Checkbox />
              <TextField
                variant="standard"
                value={option.label}
                onChange={(e) => handleLabelChange(option.id, e.target.value)}
                sx={{ width: "auto" }}
              />
              <IconButton
                onClick={() => removeCheckListOption(option.id)}
                size="small"
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Add Option Button */}
      <Button
        onClick={addCheckListOption}
        variant="contained"
        size="small"
        sx={{
          color: "#fff",
          backgroundColor: "#7d2d91",
          marginTop: "10px",
          alignSelf: "flex-start",
          ml: "3%",
          width: "55vw",
        }}
      >
        Add Option
      </Button>
    </Box>
  );
};

export default UBCheckBox;
