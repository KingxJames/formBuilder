import React, { useState, useEffect } from "react";
import { TextField, Box, Typography } from "@mui/material";

interface TextFieldComponentProps {
  preview?: boolean;
  initialDescription?: string;
  onDescriptionChange?: (description: string) => void;
}

export const TextFieldComponent: React.FC<TextFieldComponentProps> = ({
  preview = false,
  initialDescription = "description",
  onDescriptionChange,
}) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [description, setDescription] = useState(initialDescription);

  // Update internal state whenever initialDescription changes from parent
  useEffect(() => {
    setDescription(initialDescription);
  }, [initialDescription]);

  if (isDeleted) {
    return null;
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
    // Immediately notify parent of the change
    if (onDescriptionChange) {
      onDescriptionChange(newDescription);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: preview ? "auto" : "30vw",
        display: "flex",
        flexDirection: "column",
        border: preview ? "none" : "1px solid black",
        borderRadius: "5px",
        position: "relative",
        margin: "auto",
      }}
      draggable={!preview}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          marginTop: preview ? "0" : "4%",
          marginBottom: preview ? "0" : "4%",
          padding: preview ? "0" : "2%",
        }}
      >
        <Typography variant={preview ? "h6" : "body1"}>
          {preview ? description : "Text Field"}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          padding: preview ? "0" : "2%",
        }}
      >
        {preview ? (
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            {description}
          </Typography>
        ) : (
          <TextField
            variant="standard"
            placeholder="Enter description"
            value={description}
            onChange={handleDescriptionChange}
            sx={{ width: "85%", p: "2% 0 2% 0" }}
          />
        )}

        <TextField sx={{ mt: "5%", mb: "2%" }} />
      </Box>
    </Box>
  );
};

export default TextFieldComponent;