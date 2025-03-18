import React, { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Droppable } from "../../../dnd/Droppable";
import { Draggable } from "../../../dnd/Draggable";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import NotesIcon from "@mui/icons-material/Notes";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import GestureIcon from "@mui/icons-material/Gesture";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ImageIcon from "@mui/icons-material/Image";
import TextFieldComponent from "../../../commons/TextField/TextFieldComponent";
import Workflow from "../../../commons/workflow/workflow";
import Notes from "../../../commons/Notes/Notes";
import UBDatePicker from "../../../commons/DatePicker/DatePicker";
import Time from "../../../commons/Time/Time";

export const FormElements: React.FC = () => {
  // Store dropped items with unique IDs
  const [droppedItems, setDroppedItems] = useState<
    { id: string; type: string }[]
  >([]);

  // Handle drag end event
  const handleDragEnd = (event: DragEndEvent) => {
    if (event.over) {
      const newItem = {
        id: `${event.active.id}-${Date.now()}`,
        type: event.active.id as string,
      };
      setDroppedItems((prev) => [...prev, newItem]); // Allow multiple instances
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {/* Sidebar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #ccc",
          width: "35vw",
          height: "100vh", // Full screen height
          color: "rgb(57, 57, 57)",
          overflowX: "hidden", // Disable horizontal scrolling
          overflowY: "auto", // Enable vertical scrolling
          maxWidth: "100%", // Ensure content does not overflow horizontally
          backgroundColor: "rgba(233, 230, 230, 0.27)", // Add a background color
          margin: "-0.5%",
          padding: "2%",
        }}
      >
        <Box sx={{ mb: "10%", textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "600",
              mb: "5%",
              textAlign: "left",
            }}
          >
            Containers
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} display="flex" justifyContent="center">
              <Draggable id="workflow-step">
                <ApartmentIcon />
                Workflow Step
              </Draggable>
            </Grid>
          </Grid>

          <Box sx={{ mb: "10%" }}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "600",
                mb: "5%",
                textAlign: "left",
              }}
            >
              Text Elements
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "3%",
                width: "100%",
                padding: "2%",
              }}
            >
              <Grid item xs={12} display="flex" justifyContent="center">
                <Draggable id="textField">
                  <TextFieldsIcon />
                  TextField
                </Draggable>
              </Grid>

              <Grid item xs={12} display="flex" justifyContent="space-between">
                <Draggable id="notes">
                  <NotesIcon />
                  Notes
                </Draggable>
              </Grid>
            </Box>
          </Box>

          <Box sx={{ mb: "10%" }}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "600",
                mb: "3%",
                textAlign: "left",
              }}
            >
              Date Elements{" "}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "3%",
                width: "100%",
                padding: "2%",
              }}
            >
              <Grid item xs={12} display="flex" justifyContent="center">
                <Draggable id="datePicker">
                  <DateRangeIcon />
                  Date Picker
                </Draggable>
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="space-between">
                <Draggable id="time">
                  <AccessTimeIcon />
                  Time
                </Draggable>
              </Grid>
            </Box>
          </Box>

          <Box sx={{ mb: "10%" }}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "600",
                mb: "5%",
                textAlign: "left",
              }}
            >
              Other Elements
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "3%",
                width: "100%",
                padding: "2%",
              }}
            >
              <Grid item xs={12} display="flex" justifyContent="center">
                <Draggable id="Radio">
                  <RadioButtonCheckedIcon />
                  Radio
                </Draggable>
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="center">
                <Draggable id="checkList">
                  <ApartmentIcon />
                  checkList
                </Draggable>
              </Grid>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "3%",
                width: "100%",
                padding: "2%",
              }}
            >
              <Grid item xs={12} display="flex" justifyContent="space-between">
                <Draggable id="Dropdown">
                  <ArrowDropDownCircleIcon />
                  Dropdown
                </Draggable>
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="center">
                <Draggable id="CheckBox">
                  <CheckBoxIcon />
                  CheckBox
                </Draggable>
              </Grid>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "3%",
                width: "100%",
                padding: "2%",
              }}
            >
              <Grid item xs={12} display="flex" justifyContent="space-between">
                <Draggable id="Signature">
                  <GestureIcon />
                  Signature
                </Draggable>
              </Grid>
            </Box>
          </Box>

          <Box sx={{ mb: "10%" }}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "600",
                mb: "5%",
                textAlign: "left",
              }}
            >
              Media Elements{" "}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "3%",
                width: "100%",
                padding: "2%",
              }}
            >
              {" "}
              <Grid item xs={12} display="flex" justifyContent="center">
                <Draggable id="Upload">
                  <FileUploadIcon />
                  Upload
                </Draggable>
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="space-between">
                <Draggable id="Image">
                  <ImageIcon />
                  Image
                </Draggable>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Droppable Area */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: 2,
          overflowY: "auto", // Allows scrolling if many items are added
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch", // Ensures items take full width
          gap: 2, // Adds spacing between elements
        }}
      >
        <Droppable id="droppable">
          {droppedItems.length === 0 ? (
            <Typography textAlign="center">+ ADD WORKFLOW STEP HERE</Typography>
          ) : (
            droppedItems.map((item) => (
              <Box
                key={item.id}
                sx={{
                  width: "100%",
                  background: "#f5f5f5",
                  padding: 2,
                  borderRadius: 1,
                }}
              >
                {item.type === "workflow-step" ? (
                  <Workflow />
                ) : item.type === "textField" ? (
                  <TextFieldComponent />
                ) : item.type === "notes" ? (
                  <Notes />
                ) : item.type === "datePicker" ? (
                  <UBDatePicker />
                ) : item.type === "time" ? (
                  <Time />
                ) : item.type === "Radio" ? (
                  <UBRadio />
                ) : item.type === "Toggle" ? (
                  <UBToggle />
                ) : item.type === "checkList" ? (
                  <UBCheckList />
                ) : item.type === "Dropdown" ? (
                  <UBDropdown />
                ) : item.type === "CheckBox" ? (
                  <UBCheckBox />
                ) : item.type === "Signature" ? (
                  <UBSignature />
                ) : item.type === "Upload" ? (
                  <UBUpload />
                ) : item.type === "Image" ? (
                  <UBImage />
                ) : null}
              </Box>
            ))
          )}
        </Droppable>
      </Box>
    </DndContext>
  );
};

export default FormElements;
