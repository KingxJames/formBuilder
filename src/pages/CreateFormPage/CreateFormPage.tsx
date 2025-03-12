import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { AddForm } from "../../commons/addForm/addForm";

export const CreateFormPage: React.FC = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", paddingBottom: "2%", marginBottom: "7%" }}
      >
        All Form
      </Typography>
      <Box sx={{ margin: "auto", width: "80%", paddingBottom: "2%" }}>
        <AddForm name="create Form" deleteForm={() => {}} editForm={() => {}} />
      </Box>
    </Box>
  );
};

export default CreateFormPage;
