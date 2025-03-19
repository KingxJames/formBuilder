import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface CreateFormBoxProps {
  open: boolean;
  onClose: () => void;
}

export const CreateFormBox: React.FC<CreateFormBoxProps> = ({
  open,
  onClose,
}) => {
  const navigate = useNavigate(); // Hook to navigate

  const handleCreateForm = () => {
    onClose(); // Close the dialog first
    navigate("/create-form"); // Navigate to the next page
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth // Ensure the dialog takes up full width
      maxWidth="lg" // Set the maximum width of the dialog
      sx={{ textAlign: "center" }} // Center the dialog content
    >
      <DialogContent
        sx={{
          padding: "24px", // Add padding inside the dialog
        }}
      >
        <DialogContentText
          sx={{
            fontSize: "20px",
            fontWeight: "500",
            marginBottom: "3%", // Add spacing below the title
            textAlign: "center", // Center the title
            width: "100%",
          }}
        >
          Enter the following details:
        </DialogContentText>
        <input
          type="text"
          placeholder="Form Name"
          style={{
            width: "50%",
            padding: "12px",
            backgroundColor: "#fff",
            color: "#000",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        />
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "center", // Center the buttons
          padding: "16px", // Add padding around the buttons
        }}
      >
        <Button
          onClick={handleCreateForm}
          variant="contained"
          sx={{
            backgroundColor: "#7d2d91", // Custom button color
            color: "#fff",
            "&:hover": {
              backgroundColor: "#5a1f6b", // Darker color on hover
            },
          }}
        >
          Create Form
        </Button>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            color: "#7d2d91", // Match the primary color
            borderColor: "#7d2d91", // Match the primary color
            "&:hover": {
              borderColor: "#5a1f6b", // Darker color on hover
            },
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateFormBox;
