import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { AddForm } from "../../components/AddForm/AddForm";

export const CreateFormPage: React.FC = () => {
  return (
    <Box>
      <Box sx={{ margin: "auto", width: "100%", paddingBottom: "5%" }}>
        <AddForm name="create Form" deleteForm={() => {}} editForm={() => {}} />
      </Box>
    </Box>
  );
};

export default CreateFormPage;
