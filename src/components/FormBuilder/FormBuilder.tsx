import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { WorkFlow } from "./FormInfo/FormInfo";
import { FormElements } from "./FormElement/FormElement";

export const FormBuilder: React.FC = () => {

  return (
    <Box sx={{ display: "flex",  gap: "2vh" }}>
        <FormElements />
    </Box>
  );
};

export default FormBuilder;