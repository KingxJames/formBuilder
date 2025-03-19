import React, { useState } from "react";
import { Box, Button, Typography, Dialog, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import UBLogo from "../../../src/images/UB-Logo.png";
import CreateFormBox from "../../commons/createFormBox/CreateFormBox";

interface AddFormProps {
  name: string;
  deleteForm: () => void;
  editForm: () => void;
}

export const AddForm: React.FC<AddFormProps> = ({
  name,
  deleteForm,
  editForm,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          ml: "-0.8%",
          mt: "-0.8%",
          width: "96vw",
          height: "6vh",
          backgroundColor: "rgba(216, 216, 216, 0.37)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          padding: "2%",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Logo and Title */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img src={UBLogo} alt="logo" width="20%" height="100%" />
          <Typography sx={{ fontSize: "20px" }}> UB Form Builder</Typography>
        </Box>

        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            padding: "4px",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search..."
            fullWidth
            InputProps={{
              // Add the SearchIcon
              startAdornment: (
                <SearchIcon sx={{ color: "action.active", mr: 1 }} />
              ),
              sx: {
                backgroundColor: "#fff",
                borderRadius: "30px",
              },
            }}
          />
        </Box>
      </Box>

      {/* Add Form Section */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={1}
        sx={{ width: "10em", marginTop: "2%", padding: "4%" }} // Add some margin at the top
      >
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

        {/* Create Form Dialog */}
        <CreateFormBox open={open} onClose={handleCloseDialog} />
      </Box>
    </Box>
  );
};

export default AddForm;
