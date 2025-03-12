import React, { useState } from "react";
import { Box, Button, Typography, Dialog } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CreateFormBox from "../../components/createFormBox/CreateFormBox";

interface AddFormProps {
  name: string;
  deleteForm: () => void;
  editForm: () => void;
}

export const AddForm: React.FC<AddFormProps> = ({ name, deleteForm, editForm }) => {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={1} sx={{ width: "10em" }}>
      <Box
        sx={{
          border: "1px dashed black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "10em",
          height: "10em",
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "#f0f0f0",
            borderColor: "#1976d2",
            cursor: "pointer",
          },
        }}
        onClick={handleOpenDialog}
      >
        <AddIcon fontSize="large" />
      </Box>

      <Typography variant="body1">{name}</Typography>

      <Box display="flex" gap={1}>
        <Button onClick={deleteForm} color="error" variant="contained" size="small">
          <DeleteIcon />
        </Button>
        <Button onClick={editForm} color="primary" variant="contained" size="small">
          <EditIcon />
        </Button>
      </Box>

      {/* Dialog for CreateFormBox */}
      <CreateFormBox open={open} onClose={handleCloseDialog} />
    </Box>
  );
};

export default AddForm;
