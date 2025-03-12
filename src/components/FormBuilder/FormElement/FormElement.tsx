import React, { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Droppable } from "../../../dnd/Droppable";
import { Draggable } from "../../../dnd/Draggable";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const FormElements: React.FC = () => {
  // Store dropped items with unique IDs
  const [droppedItems, setDroppedItems] = useState<{ id: string; type: string }[]>([]);

  // Handle drag end event
  const handleDragEnd = (event: DragEndEvent) => {
    if (event.over) {
      const newItem = { id: `${event.active.id}-${Date.now()}`, type: event.active.id as string };

      setDroppedItems((prev) => [...prev, newItem]); // Allow multiple instances
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {/* Sidebar */}
      <Box
        sx={{
          justifyContent: "center",
          border: "1px solid black",
          width: "25%",
          height: "100%",
          padding: 3,
          color: "rgb(57, 57, 57)",
        }}
      >
        <Box sx={{ mb: "10%", display: "flex", justifyContent: "right" }}>
          <ArrowBackIcon />
        </Box>

        <Box sx={{ mb: "10%", textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "900",
              mb: "3%",
              textAlign: "left",
            }}
          >
            Containers
          </Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} display="flex" justifyContent="center">
              <Draggable id="workflow-step">
                <ApartmentIcon />
                Workflow Step
              </Draggable>
            </Grid>
          </Grid>

          <Box sx={{ mb: "10%" }}>
            <Typography sx={{ fontSize: "15px", fontWeight: "900", mb: "3%" }}>
              Text Elements
            </Typography>

            <Grid item xs={12} display="flex" justifyContent="center">
              <Draggable id="textField">
                <ApartmentIcon />
                TextField
              </Draggable>
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* Droppable Area */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          border: "1px solid black",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Droppable id="droppable">
          {droppedItems.length === 0 ? (
            "Drop here"
          ) : (
            droppedItems.map((item) => (
              <Draggable key={item.id} id={item.id}>
                {item.type === "workflow-step" ? "+ ADD A WORK FLOW STEP" : "TextField"}
              </Draggable>
            ))
          )}
        </Droppable>
      </Box>
    </DndContext>
  );
};

export default FormElements;
