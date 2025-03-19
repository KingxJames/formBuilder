import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export const UBUpload: React.FC = () => {
  const [upload, setUpload] = useState<File[]>([]); // Array to store multiple files
  const [preview, setPreview] = useState<string[]>([]); // Array to store preview URLs for images

  // Handle file upload
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files); // Convert FileList to an array
      setUpload((prev) => [...prev, ...fileArray]);

      // Generate preview URLs for image files
      const previewUrls = fileArray
        .filter((file) => file.type.startsWith("image/")) // Filter only image files
        .map((file) => URL.createObjectURL(file)); // Create preview URLs
      setPreview((prev) => [...prev, ...previewUrls]);
    }
  };

  // Clear all uploaded files
  const clearUpload = () => {
    setUpload([]);
    setPreview([]);
  };

  // Handle saving the uploaded files (this could be uploading to a server)
  const saveUpload = () => {
    if (upload.length > 0) {
      // Example action after files are uploaded (e.g., save to a server or state)
      console.log("Files uploaded:", upload);
      // Do not clear the file state after saving/uploading
    }
  };

  // Delete a specific preview image
  const deletePreview = (index: number) => {
    setUpload((prev) => prev.filter((_, i) => i !== index)); // Remove file from upload state
    setPreview((prev) => prev.filter((_, i) => i !== index)); // Remove preview URL
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
        <Typography>Upload Files</Typography>

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

      {/* Input Fields */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "85%",
          padding: "3%",
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
            multiple // Allow multiple file selection
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

        {/* Display the uploaded files (if any) */}
        {preview.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography>Preview:</Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              {preview.map((url, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    "&:hover .delete-icon": {
                      display: "block", // Show delete icon on hover
                    },
                  }}
                >
                  <img
                    src={url}
                    alt={`Uploaded Preview ${index + 1}`}
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                  {/* Delete Icon */}
                  <Box
                    className="delete-icon"
                    sx={{
                      display: "none", // Hide by default
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      borderRadius: "50%",
                      padding: "2px",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "rgba(255, 0, 0, 0.8)",
                      },
                    }}
                    onClick={() => deletePreview(index)}
                  >
                    <DeleteIcon sx={{ color: "red", fontSize: "16px" }} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default UBUpload;