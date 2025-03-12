import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { WorkFlow } from "./Workflow/WorkFlow";
import { FormElements } from "./FormElement/FormElement";

export const FormBuilder: React.FC = () => {

  return (
    <Box sx={{ display: "flex",  gap: "2vh" }}>
        <FormElements />
        {/* <WorkFlow name="Workflow Name" /> */}
    </Box>
  );
};

export default FormBuilder;