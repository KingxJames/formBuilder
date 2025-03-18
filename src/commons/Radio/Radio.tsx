import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import DeleteIcon from "@mui/icons-material/Delete";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export const UBRadio: React.FC = () => {
  const [radioOptions, setRadioOptions] = useState([
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
  ]);

  // Handle label change
  const handleLabelChange = (id: number, newLabel: string) => {
    setRadioOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, label: newLabel } : option
      )
    );
  };

  // Add a new radio option
  const addRadioOption = () => {
    setRadioOptions([
      ...radioOptions,
      { id: Date.now(), label: `Option ${radioOptions.length + 1}` },
    ]);
  };

  // Remove a radio option
  const removeRadioOption = (id: number) => {
    setRadioOptions(radioOptions.filter((option) => option.id !== id));
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "2%",
        margin: "auto",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "4%" }}>
        <Typography> Radio</Typography>
        <Box sx={{ marginLeft: "auto" }}>
          <DragIndicatorIcon sx={{ cursor: "grab", marginRight: "8px" }} />
          <DeleteIcon sx={{ cursor: "pointer", color: "red" }} />
        </Box>
      </Box>

      <FormControl>
        <TextField
          variant="standard"
          placeholder="Some description about the field"
          sx={{ width: "85%", marginBottom: "2%" }}
        />
        {/* Dynamic row grouping (2 per row) */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {radioOptions
            .reduce((acc, option, index) => {
              if (index % 2 === 0) {
                acc.push([option]);
              } else {
                acc[acc.length - 1].push(option);
              }
              return acc;
            }, [] as { id: number; label: string }[][])
            .map((pair, rowIndex) => (
              <RadioGroup key={rowIndex} row>
                {pair.map((option) => (
                  <Box
                    key={option.id}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <FormControlLabel
                      control={<Radio />}
                      label={
                        <TextField
                          variant="standard"
                          value={option.label}
                          onChange={(e) =>
                            handleLabelChange(option.id, e.target.value)
                          }
                        />
                      }
                    />
                    <IconButton
                      onClick={() => removeRadioOption(option.id)}
                      size="small"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
              </RadioGroup>
            ))}
        </Box>

        <Button onClick={addRadioOption} variant="outlined" sx={{ mt: 2 }}>
          Add Option
        </Button>
      </FormControl>
    </Box>
  );
};

export default UBRadio;
