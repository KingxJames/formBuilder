// //src/components/FormBuilder/FormElement/FormElement.tsx

// import React, { useState } from "react";
// import { DndContext, DragEndEvent } from "@dnd-kit/core";
// import { Droppable } from "../../../dnd/Droppable";
// import { Draggable } from "../../../dnd/Draggable";
// import Grid from "@mui/material/Grid";
// import { Box, Button, Typography, useMediaQuery } from "@mui/material";
// import ApartmentIcon from "@mui/icons-material/Apartment";
// import TextFieldsIcon from "@mui/icons-material/TextFields";
// import DescriptionIcon from "@mui/icons-material/Description";
// import DateRangeIcon from "@mui/icons-material/DateRange";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
// import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
// import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
// import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import DrawIcon from "@mui/icons-material/Draw";
// import BackupIcon from "@mui/icons-material/Backup";
// import ImageIcon from "@mui/icons-material/Image";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import PublishIcon from "@mui/icons-material/Publish";


// interface WorkFlowProps {
//   name: string;
// }


// export const FormElements: React.FC = () => {
//   const [isDropped, setIsDropped] = useState(false);
//   const [workflowSteps, setWorkflowSteps] = useState<string[]>([]); // Array to hold workflow steps
//   const isMobile = useMediaQuery("(max-width: 768px)"); // Responsive Breakpoint




//   // Handle drag end event
//   const handleDragEnd = (event: DragEndEvent) => {
//     if (event.over && event.over.id === "droppable") {
//       setIsDropped(true);
//     }
//   };

//   return (
//     <DndContext onDragEnd={handleDragEnd}>
//       <Box
//         sx={{
//           justifyContent: "center",
//           border: "1px solid black",
//           width: "25%",
//           height: "100vh",
//           padding: 3,
//           backgroundColor: "",
//           color: "rgb(57, 57, 57)",
//         }}
//       >
//         <Box sx={{ mb: "10%", display: "flex", justifyContent: "right" }}>
//           <ArrowBackIcon />
//         </Box>

//         <Box sx={{ mb: "10%", textAlign: "center" }}>
//           <Typography
//             sx={{
//               fontSize: "15px",
//               fontWeight: "900",
//               mb: "3%",
//               textAlign: "left",
//             }}
//           >
//             Containers
//           </Typography>
//           <Grid
//             container
//             rowSpacing={1}
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//           >
//             <Grid item xs={12} display="flex" justifyContent="center">
//               <Draggable id="workflow-step">
//                 <Button
//                   sx={{
//                     border: "1px solid black",
//                     textAlign: "center",
//                     width: "100%",
//                     color: "black",
//                     transition: "0.3s",
//                     "&:hover": {
//                       boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
//                     },
//                   }}
//                 >
//                   <ApartmentIcon />
//                   Workflow Step
//                 </Button>
//               </Draggable>
//             </Grid>
//           </Grid>
//         </Box>
//         <Box sx={{ mb: "10%" }}>
//           <Typography sx={{ fontSize: "15px", fontWeight: "900", mb: "3%" }}>
//             Text Elements
//           </Typography>
//           <Grid
//             container
//             rowSpacing={1}
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//           >
//             {[
//               { label: "Text Field", icon: <TextFieldsIcon /> },
//               { label: "Notes", icon: <DescriptionIcon /> },
//             ].map((item) => (
//               <Grid item xs={6} key={item.label}>
//                 <Button
//                   sx={{
//                     border: "1px solid black",
//                     textAlign: "center",
//                     width: "100%",
//                     height: "50px", // Set a fixed height
//                     minHeight: "50px",
//                     color: "black",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     gap: "8px",
//                     transition: "0.3s",
//                     "&:hover": {
//                       boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
//                     },
//                   }}
//                 >
//                   {item.icon}
//                   {item.label}
//                 </Button>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//         <Box sx={{ mb: "10%" }}>
//           <Typography sx={{ fontSize: "15px", fontWeight: "900", mb: "3%" }}>
//             Date Elements
//           </Typography>
//           <Grid
//             container
//             rowSpacing={1}
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//           >
//             {[
//               { label: "Date Picker", icon: <DateRangeIcon /> },
//               { label: "Time", icon: <AccessTimeIcon /> },
//             ].map((item, index) => (
//               <Grid item xs={6} key={index}>
//                 <Button
//                   sx={{
//                     border: "1px solid black",
//                     textAlign: "center",
//                     width: "100%",
//                     height: "50px", // Ensures all buttons have the same height
//                     minHeight: "50px",
//                     color: "black",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     gap: "8px",
//                     transition: "0.3s",
//                     "&:hover": {
//                       boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
//                     },
//                   }}
//                 >
//                   {item.icon}
//                   {item.label}
//                 </Button>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         <Box sx={{ mb: "10%" }}>
//           <Typography sx={{ fontSize: "15px", fontWeight: "900", mb: "3%" }}>
//             Other Elements
//           </Typography>
//           <Grid
//             container
//             rowSpacing={1}
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//           >
//             {[
//               { label: "Radio", icon: <RadioButtonCheckedIcon /> },
//               { label: "Toggle", icon: <ToggleOnOutlinedIcon /> },
//               { label: "Checklist", icon: <ChecklistRtlIcon /> },
//               { label: "Dropdown", icon: <ArrowDropDownCircleIcon /> },
//               { label: "Checkbox", icon: <CheckBoxIcon /> },
//               { label: "Signature", icon: <DrawIcon /> },
//             ].map((item) => (
//               <Grid item xs={6} key={item.label}>
//                 <Button
//                   sx={{
//                     border: "1px solid black",
//                     textAlign: "center",
//                     width: "100%",
//                     height: "50px", // Ensures consistent button height
//                     minHeight: "50px",
//                     color: "black",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     gap: "8px",
//                     transition: "0.3s",
//                     "&:hover": {
//                       boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
//                     },
//                   }}
//                 >
//                   {item.icon}
//                   {item.label}
//                 </Button>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         <Box sx={{ mb: "10%" }}>
//           <Typography sx={{ fontSize: "15px", fontWeight: "900", mb: "3%" }}>
//             Media Elements
//           </Typography>
//           <Grid
//             container
//             rowSpacing={1}
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//           >
//             {[
//               { label: "Upload", icon: <BackupIcon /> },
//               { label: "Image", icon: <ImageIcon /> },
//             ].map((item) => (
//               <Grid item xs={6} key={item.label}>
//                 <Button
//                   sx={{
//                     border: "1px solid black",
//                     textAlign: "center",
//                     width: "100%",
//                     height: "50px", // Ensures all buttons have the same height
//                     minHeight: "50px",
//                     color: "black",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     gap: "8px",
//                     transition: "0.3s",
//                     "&:hover": {
//                       boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
//                     },
//                   }}
//                 >
//                   {item.icon}
//                   {item.label}
//                 </Button>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Box>

//       <Box
//         sx={{
//           width: "100vw", // Full width on smaller screens, 56vw on larger ones
//           height: "100vh", // Full height on smaller screens, 56vh on larger ones
//           border: "1px solid black",
//           boxSizing: "border-box",
//           display: "flex",
//           flexDirection: "column",
//           gap: "2vh",
//         }}
//       >
//         {/* Header Box */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             width: "100%",
//             padding: "2vh 2vw",
//             boxSizing: "border-box",
//             flexWrap: "wrap", // Ensures buttons wrap if needed
//           }}
//         >
//           {/* Left-aligned Typography */}
//           <Typography
//             variant={isMobile ? "subtitle1" : "h6"} // Adjusts size based on screen width
//           >
//             {/* {name} */}
//           </Typography>

//           {/* Right-aligned Buttons */}
//           <Box
//             sx={{
//               display: "flex",
//               gap: "1vw",
//               flexWrap: "wrap", // Allows buttons to move to the next line on small screens
//               marginBottom: "6vh",
//             }}
//           >
//             <Button
//               size={isMobile ? "small" : "medium"}
//               sx={{ color: "black", backgroundColor: "transparent" }}
//             >
//               Cancel
//             </Button>

//             <hr />

//             <Button
//               size={isMobile ? "small" : "medium"}
//               sx={{ color: "black", backgroundColor: "transparent" }}
//             >
//               Save
//             </Button>
//             <Button
//               variant="contained"
//               size={isMobile ? "small" : "medium"}
//               sx={{ color: "#fff", backgroundColor: "#7d2d91" }}
//             >
//               Preview
//               <RemoveRedEyeIcon
//                 fontSize={isMobile ? "small" : "medium"}
//                 sx={{ color: "#fff", backgroundColor: "#7d2d91" }}
//               />
//             </Button>
//             <Button
//               variant="contained"
//               size={isMobile ? "small" : "medium"}
//               sx={{ color: "#fff", backgroundColor: "#7d2d91" }}
//             >
//               Publish
//               <PublishIcon fontSize={isMobile ? "small" : "medium"} />
//             </Button>
//           </Box>
//         </Box>

//         {/* Workflow Step Box */}
//         <Droppable id="workflow-step">
//           <Box
//             sx={{
//               width: "80%",
//               height: "30vh", // Responsive height
//               minHeight: "150px", // Prevents collapsing on small screens
//               padding: "2vh 2vw",
//               borderRadius: "10px",
//               backgroundColor: "rgba(203, 203, 203, 0.8)",
//               boxSizing: "border-box",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: isMobile ? "12px" : "16px",
//               border: "1px solid black",
//               margin: "0 auto",
//             }}
//           >
//             + ADD A WORKFLOW STEP
//           </Box>

//           {/* Workflow Steps List */}
//           {workflowSteps.length > 0 && (
//             <Box
//               sx={{
//                 width: "100%",
//                 padding: "2vh 2vw",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "1vh",
//                 marginTop: "2vh",
//               }}
//             >
//               {workflowSteps.map((step, index) => (
//                 <Draggable key={step} id={step}>
//                   <Box
//                     sx={{
//                       padding: "10px 20px",
//                       borderRadius: "8px",
//                       backgroundColor: "#f4f4f4",
//                       border: "1px solid #ccc",
//                       fontSize: isMobile ? "12px" : "16px",
//                       display: "flex",
//                       justifyContent: "space-between",
//                       alignItems: "center",
//                     }}
//                   >
//                     {step}
//                   </Box>
//                 </Draggable>
//               ))}
//             </Box>
//           )}
//         </Droppable>
//       </Box>
//     </DndContext>
//   );
// };

// export default FormElements;
