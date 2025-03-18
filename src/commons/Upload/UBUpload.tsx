import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export const UBUpload: React.FC = () => {
  const [upload, setUpload] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // Handle file upload
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first file
    if (file) {
      setUpload(file);

      // Create a preview URL for the file if it's an image
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  // Clear the uploaded file
  const clearUpload = () => {
    setUpload(null);
    setPreview(null);
  };

  // Handle saving the uploaded file (this could be uploading to a server)
  const saveUpload = () => {
    if (upload) {
      // Example action after file is uploaded (e.g., save to a server or state)
      console.log("File uploaded:", upload);
      // Clear the file state after saving/uploading
      clearUpload();
    }
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
        <Typography>Upload</Typography>

        <Box sx={{ marginLeft: "auto" }}>
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
            mb: 2,
          }}
        />

        {/* File Upload */}
        <Box>
          <input
            type="file"
            accept="image/*" // Optional: change to other file types (e.g., 'application/pdf')
            onChange={handleFileChange}
            style={{ marginBottom: "10px" }}
          />
        </Box>

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            onClick={clearUpload}
            sx={{ color: "red" }}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            onClick={saveUpload}
            sx={{ backgroundColor: "#7d2d91", color: "#fff" }}
          >
            Save Upload
          </Button>
        </Box>

        {/* Display the uploaded file (if any) */}
        {preview && (
          <Box sx={{ mt: 2 }}>
            <Typography>Preview:</Typography>
            <img
              src={preview}
              alt="Uploaded Preview"
              style={{ maxWidth: "100%", marginTop: "10px" }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default UBUpload;
