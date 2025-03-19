import React from "react";
import { Box } from "@mui/material";
import { FormElements } from "./FormElement/FormElement";

export const FormBuilder: React.FC = () => {
  return (
    <Box sx={{ display: "flex", gap: "2vh" }}>
      <FormElements />
    </Box>
  );
};

export default FormBuilder;
