// src/components/FormBuilder/Workflow/WorkFlow.tsx

import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { DndContext, DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { Droppable } from "../../../dnd/Droppable";
import { Draggable } from "../../../dnd/Draggable";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PublishIcon from "@mui/icons-material/Publish";
import React, { useState } from "react";

interface WorkFlowProps {
  name: string;
}

export const WorkFlow: React.FC<WorkFlowProps> = ({ name }) => {
  const isMobile = useMediaQuery("(max-width: 768px)"); // Responsive Breakpoint
  const [workflowSteps, setWorkflowSteps] = useState<string[]>([]); // Array to hold workflow steps
  

  return (
      <Box
        sx={{
          width: "100vw", // Full width on smaller screens, 56vw on larger ones
          height: "100vh", // Full height on smaller screens, 56vh on larger ones
          border: "1px solid black",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
        }}
      >
        {/* Header Box */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "2vh 2vw",
            boxSizing: "border-box",
            flexWrap: "wrap", // Ensures buttons wrap if needed
          }}
        >
          {/* Left-aligned Typography */}
          <Typography
            variant={isMobile ? "subtitle1" : "h6"} // Adjusts size based on screen width
          >
            {name}
          </Typography>

          {/* Right-aligned Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: "1vw",
              flexWrap: "wrap", // Allows buttons to move to the next line on small screens
              marginBottom: "6vh",
            }}
          >
            <Button
              size={isMobile ? "small" : "medium"}
              sx={{ color: "black", backgroundColor: "transparent" }}
            >
              Cancel
            </Button>

            <hr />

            <Button
              size={isMobile ? "small" : "medium"}
              sx={{ color: "black", backgroundColor: "transparent" }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              size={isMobile ? "small" : "medium"}
              sx={{ color: "#fff", backgroundColor: "#7d2d91" }}
            >
              Preview
              <RemoveRedEyeIcon
                fontSize={isMobile ? "small" : "medium"}
                sx={{ color: "#fff", backgroundColor: "#7d2d91" }}
              />
            </Button>
            <Button
              variant="contained"
              size={isMobile ? "small" : "medium"}
              sx={{ color: "#fff", backgroundColor: "#7d2d91" }}
            >
              Publish
              <PublishIcon fontSize={isMobile ? "small" : "medium"} />
            </Button>
          </Box>
        </Box>

        {/* Workflow Step Box */}
        <Droppable id="workflow-step">
          <Box
            sx={{
              width: "80%",
              height: "30vh", // Responsive height
              minHeight: "150px", // Prevents collapsing on small screens
              padding: "2vh 2vw",
              borderRadius: "10px",
              backgroundColor: "rgba(203, 203, 203, 0.8)",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: isMobile ? "12px" : "16px",
              border: "1px solid black",
              margin: "0 auto",
            }}
          >
            + ADD A WORKFLOW STEP
          </Box>

          {/* Workflow Steps List */}
          {workflowSteps.length > 0 && (
            <Box
              sx={{
                width: "100%",
                padding: "2vh 2vw",
                display: "flex",
                flexDirection: "column",
                gap: "1vh",
                marginTop: "2vh",
              }}
            >
              {workflowSteps.map((step, index) => (
                <Draggable key={step} id={step}>
                  <Box
                    sx={{
                      padding: "10px 20px",
                      borderRadius: "8px",
                      backgroundColor: "#f4f4f4",
                      border: "1px solid #ccc",
                      fontSize: isMobile ? "12px" : "16px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {step}
                  </Box>
                </Draggable>
              ))}
            </Box>
          )}
        </Droppable>
      </Box>
  );
};

export default WorkFlow;
