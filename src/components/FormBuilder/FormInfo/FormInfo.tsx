import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PublishIcon from "@mui/icons-material/Publish";
import React from "react";

interface WorkFlowProps {
  name: string;
}

export const WorkFlow: React.FC<WorkFlowProps> = ({ name }) => {
  const isMobile = useMediaQuery("(max-width: 768px)"); // Responsive Breakpoint

  return (
    <Box
      sx={{
        width: "100%", // Full width on all screens
        borderRadius: "4px", // Add some border radius for better appearance
        backgroundColor: "#fff", // Add a background color
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
      }}
    >
      {/* Header Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "16px", // Consistent padding
          boxSizing: "border-box",
          flexWrap: "wrap", // Ensures buttons wrap if needed
          gap: "8px", // Add gap between items
        }}
      >
        {/* Left-aligned Typography */}
        <Typography
          variant={isMobile ? "subtitle1" : "h6"} // Adjusts size based on screen width
          sx={{ fontWeight: "600" }} // Add some font weight
        >
          {name}
        </Typography>

        {/* Divider */}
        <Box
          sx={{
            flexGrow: 1,
            borderBottom: "1px solid #ccc",
            mx: 2, // Add margin to the divider
            display: isMobile ? "none" : "block", // Hide on mobile
          }}
        />

        {/* Right-aligned Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: "8px", // Consistent gap between buttons
            flexWrap: "wrap", // Allows buttons to move to the next line on small screens
          }}
        >
          <Button
            size={isMobile ? "small" : "medium"}
            sx={{
              color: "black",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" }, // Add hover effect
            }}
          >
            Cancel
          </Button>

          <Button
            size={isMobile ? "small" : "medium"}
            sx={{
              color: "black",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" }, // Add hover effect
            }}
          >
            Save
          </Button>

          <Button
            variant="contained"
            size={isMobile ? "small" : "medium"}
            sx={{
              color: "#fff",
              backgroundColor: "#7d2d91",
              "&:hover": { backgroundColor: "#6a1b7a" }, // Darker shade on hover
            }}
          >
            Preview
            <RemoveRedEyeIcon
              fontSize={isMobile ? "small" : "medium"}
              sx={{ ml: 1 }} // Add margin to the icon
            />
          </Button>

          <Button
            variant="contained"
            size={isMobile ? "small" : "medium"}
            sx={{
              color: "#fff",
              backgroundColor: "#7d2d91",
              "&:hover": { backgroundColor: "#6a1b7a" }, // Darker shade on hover
            }}
          >
            Publish
            <PublishIcon fontSize={isMobile ? "small" : "medium"} sx={{ ml: 1 }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkFlow;