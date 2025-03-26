import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const UBDropDown: React.FC = () => {
  const [dropDownOptions, setDropDownOptions] = useState([
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
  ]);
  const [selectedOption, setSelectedOption] = useState("");

  // Handle label change
  const handleLabelChange = (id: number, newLabel: string) => {
    setDropDownOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, label: newLabel } : option
      )
    );
  };

  // Handle select option change
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedOption(event.target.value as string);
  };

  // Add a new drop down option
  const addDropDownOption = () => {
    setDropDownOptions([
      ...dropDownOptions,
      { id: Date.now(), label: `Option ${dropDownOptions.length + 1}` },
    ]);
  };

  // Remove a drop down option
  const removeDropDownOption = (id: number) => {
    setDropDownOptions(dropDownOptions.filter((option) => option.id !== id));
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
        <Typography>Drop Down</Typography>

        {/* Icons */}
        <Box
          sx={{
            position: "absolute",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
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
            padding: "3%",
          }}
        />

        {/* DropDown */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "3%",
          }}
        >
          {/* Dropdown Select */}
          <Select
            value={selectedOption}
            onChange={handleSelectChange}
            displayEmpty
            fullWidth
            sx={{ mb: 2 }}
          >
            <MenuItem value="" disabled>
              Select an option
            </MenuItem>
            {dropDownOptions.map((option) => (
              <MenuItem key={option.id} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </Select>

          {/* Dynamic Options List */}
          {dropDownOptions.map((option) => (
            <Box
              key={option.id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "3%",
              }}
            >
              <TextField
                variant="standard"
                value={option.label}
                onChange={(e) => handleLabelChange(option.id, e.target.value)}
                sx={{ width: "auto" }}
              />
              <IconButton
                onClick={() => removeDropDownOption(option.id)}
                size="small"
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Icons */}
      <Box>
        <IconButton
          size="small"
          onClick={addDropDownOption}
          sx={{ color: "black", backgroundColor: "transparent", padding: "3%" }}
        >
          <Button
            size="small"
            sx={{ color: "#fff", backgroundColor: "#7d2d91", width: "55vw" }}
          >
            Add Option
          </Button>
        </IconButton>
      </Box>
    </Box>
  );
};

export default UBDropDown;
