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
import FormBuilderHeader from "../Header/FormBuilderHeader";
import FormInfo from "../FormInfo/FormInfo";
import TextFieldComponent from "../../../commons/TextField/TextFieldComponent";
import Workflow from "../../../commons/workflow/workflow";
import Notes from "../../../commons/Notes/Notes";
import UBDatePicker from "../../../commons/DatePicker/DatePicker";
import Time from "../../../commons/Time/Time";
import UBRadio from "../../../commons/Radio/Radio";
import UBDropDown from "../../../commons/DropDown/DropDown";
import UBCheckBox from "../../../commons/CheckBox/CheckBox";
import UBSignature from "../../../commons/Signature/Signature";
import UBUpload from "../../../commons/Upload/UBUpload";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh", // Full viewport height
          overflow: "hidden", // Prevent scrolling for the entire screen
        }}
      >
        {/* Header */}
        <FormBuilderHeader />

        {/* Main Content */}
        <Box
          sx={{
            display: "flex",
            flex: 1, // Take up remaining space
            overflow: "hidden", // Prevent scrolling for the entire content area
          }}
        >
          {/* Sidebar */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid #ccc",
              width: "20vw",
              height: "100%", // Full height of the parent
              color: "rgb(57, 57, 57)",
              overflowY: "auto", // Enable vertical scrolling for the sidebar
              backgroundColor: "rgba(233, 230, 230, 0.27)",
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

                  <Grid
                    item
                    xs={12}
                    display="flex"
                    justifyContent="space-between"
                  >
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
                  <Grid
                    item
                    xs={12}
                    display="flex"
                    justifyContent="space-between"
                  >
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

                  <Grid
                    item
                    xs={12}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Draggable id="Dropdown">
                      <ArrowDropDownCircleIcon />
                      Dropdown
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
                  <Grid item xs={12} display="flex" justifyContent="center">
                    <Draggable id="CheckBox">
                      <CheckBoxIcon />
                      CheckBox
                    </Draggable>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    display="flex"
                    justifyContent="space-between"
                  >
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
                  <Grid item xs={12} display="flex" justifyContent="center">
                    <Draggable id="Upload">
                      <FileUploadIcon />
                      Upload
                    </Draggable>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
            <Box>
              <FormInfo name="Form Name" />
            </Box>

            {/* Droppable Area */}
            <Box
              sx={{
                flex: 1, // Take up remaining space
                height: "100%", // Full height of the parent
                padding: 2,
                overflowY: "auto", // Enable vertical scrolling for the droppable area
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                backgroundColor: "rgba(233, 230, 230, 0.27)",
                gap: 2,
                border: "1px dashed gray",
              }}
            >
              <Droppable id="droppable">
                {droppedItems.length === 0 ? (
                  <Typography textAlign="center">
                    + ADD WORKFLOW STEP HERE
                  </Typography>
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
                      ) : item.type === "Dropdown" ? (
                        <UBDropDown />
                      ) : item.type === "CheckBox" ? (
                        <UBCheckBox />
                      ) : item.type === "Signature" ? (
                        <UBSignature />
                      ) : item.type === "Upload" ? (
                        <UBUpload />
                      ) : null}
                    </Box>
                  ))
                )}
              </Droppable>
            </Box>
          </Box>
        </Box>
      </Box>
    </DndContext>
  );
};

export default FormElements;
