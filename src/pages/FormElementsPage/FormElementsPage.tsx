import React from "react";
import { Box } from "@mui/material";
import { FormBuilderHeader } from "../../components/FormBuilder/Header/FormBuilderHeader";
import { FormBuilder } from "../../components/FormBuilder/FormBuilder";

export const FormElementsPage: React.FC = () => {
  return (
    <Box>
      <Box sx={{ margin: "auto", width: "100%", paddingBottom: "5%" }}>
        <FormBuilder />
      </Box>
    </Box>
  );
};