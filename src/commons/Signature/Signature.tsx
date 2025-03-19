import React, { useRef, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import SignatureCanvas from "react-signature-canvas";

export const UBSignature: React.FC = () => {
  const [signature, setSignature] = useState<string | null>(null);
  const sigCanvas = useRef<SignatureCanvas | null>(null);

  // Clear the signature pad
  const clearSignature = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
    }
    setSignature(null);
  };

  // Save the signature as an image (base64 string)
  const saveSignature = () => {
    if (sigCanvas.current) {
      setSignature(sigCanvas.current.toDataURL());
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
        <Typography>Signature</Typography>

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
          margin: "auto", // Center the content horizontally
          alignItems: "center", // Center the content vertically
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

        {/* Signature Pad */}
        <Box
          sx={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "15px",
          }}
        >
          <SignatureCanvas
            ref={sigCanvas}
            penColor="black"
            canvasProps={{
              width: 400,
              height: 200,
              className: "signature-canvas",
            }}
          />
        </Box>

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Button
            variant="outlined"
            onClick={clearSignature}
            sx={{ color: "red" }}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            onClick={saveSignature}
            sx={{ backgroundColor: "#7d2d91", color: "#fff" }}
          >
            Save Signature
          </Button>
        </Box>

        {/* Display the saved signature (if any) */}
        {signature && (
          <Box sx={{ mt: 2 }}>
            <Typography>Saved Signature:</Typography>
            <img
              src={signature}
              alt="Saved Signature"
              style={{ maxWidth: "100%" }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default UBSignature;