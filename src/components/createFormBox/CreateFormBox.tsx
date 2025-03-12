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
      fullScreen
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      sx={{ width: "70%", height: "70%", margin: "auto" }}
    >
      <DialogContent
        sx={{ width: "50%", padding: "2%", margin: "auto", marginTop: "5%" }}
      >
        <DialogContentText
          sx={{ fontSize: "20px", fontWeight: "800", paddingBottom: "5%" }}
        >
          Enter the following details:
        </DialogContentText>
        <input
          type="text"
          placeholder="Form Name"
          style={{
            width: "100%",
            padding: "7px",
            marginTop: "5%",
            backgroundColor: "#fff",
            color: "#000",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </DialogContent>
      <DialogActions sx={{ margin: "auto" }}>
        <Button onClick={handleCreateForm}>Create Form</Button>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateFormBox;
