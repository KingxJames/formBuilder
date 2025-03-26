import React, { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { Droppable } from "../../../dnd/Droppable";
import { Draggable } from "../../../dnd/Draggable";
import { SortableItem } from "../../../dnd/Sortable";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
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
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DeleteIcon from "@mui/icons-material/Delete";
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
import FormPreview from "../../../components/Preview/FormPreview";

interface FormComponent {
  id: string;
  type: string;
  config?: any;
}

export const FormElements: React.FC = () => {
  // Store dropped items with unique IDs
  const [droppedItems, setDroppedItems] = useState<
    { id: string; type: string }[]
  >([]);
  const [previewOpen, setPreviewOpen] = useState(false);

  // Delete function
  const handleDelete = (id: string) => {
    setDroppedItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Handle drag end event
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    // If dropping from sidebar to droppable area
    if (
      active.id !== over.id &&
      !droppedItems.some((item) => item.id === active.id)
    ) {
      const newItem = {
        id: `${event.active.id}-${Date.now()}`,
        type: event.active.id as string,
      };
      setDroppedItems((prev) => [...prev, newItem]);
    }

    // If reordering within droppable area
    if (
      active.id !== over.id &&
      droppedItems.some((item) => item.id === active.id) &&
      droppedItems.some((item) => item.id === over.id)
    ) {
      const oldIndex = droppedItems.findIndex((item) => item.id === active.id);
      const newIndex = droppedItems.findIndex((item) => item.id === over.id);
      setDroppedItems((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  const renderElement = (item: FormComponent) => {
    switch (item.type) {
      case "workflow-step":
        return <Workflow />;
      case "textField":
        return <TextFieldComponent {...item.config} />;
      case "notes":
        return <Notes />;
      case "datePicker":
        return <UBDatePicker />;
      case "time":
        return <Time />;
      case "Radio":
        return <UBRadio />;
      case "Dropdown":
        return <UBDropDown />;
      case "CheckBox":
        return <UBCheckBox />;
      case "Signature":
        return <UBSignature />;
      case "Upload":
        return <UBUpload />;
      default:
        return null;
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Require 8px movement before dragging starts
      },
    })
  );

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
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
              <FormInfo
                name="Form Name"
                onPreviewClick={() => setPreviewOpen(true)}
              />{" "}
            </Box>

            {/* Droppable Area */}
            <Box
              sx={{
                flex: 1,
                height: "100%",
                padding: 2,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                backgroundColor: "rgba(233, 230, 230, 0.27)",
                gap: 2,
                border: "1px dashed gray",
              }}
            >
              <Droppable id="droppable">
                <Box
                  sx={{
                    width: "100%",
                    minHeight: "100px",
                    background:
                      droppedItems.length === 0 ? "#f5f5f5" : "transparent",
                    padding: 2,
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent:
                      droppedItems.length === 0 ? "center" : "flex-start",
                  }}
                >
                  {droppedItems.length === 0 ? (
                    <Typography>Drop here</Typography>
                  ) : (
                    <SortableContext
                      items={droppedItems}
                      strategy={verticalListSortingStrategy}
                    >
                      {droppedItems.map((item) => (
                        <SortableItem key={item.id} id={item.id}>
                          <Box
                            sx={{
                              width: "100%",
                              background: "#f5f5f5",
                              padding: 2,
                              borderRadius: 1,
                              mb: 2,
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <DragIndicatorIcon
                              sx={{
                                cursor: "grab",
                                marginRight: 2,
                                color: "rgba(0, 0, 0, 0.54)",
                              }}
                            />
                            <DeleteIcon
                              sx={{
                                cursor: "pointer",
                                color: "red",
                                marginRight: 2,
                              }}
                              onClick={() => handleDelete(item.id)}
                            />
                            <Box sx={{ flexGrow: 1 }}>
                              {renderElement(item)}
                            </Box>
                          </Box>
                        </SortableItem>
                      ))}
                    </SortableContext>
                  )}
                </Box>
              </Droppable>
            </Box>
          </Box>
          <FormPreview
            open={previewOpen}
            onClose={() => setPreviewOpen(false)}
            components={droppedItems}
          />
        </Box>
      </Box>
    </DndContext>
  );
};

export default FormElements;
