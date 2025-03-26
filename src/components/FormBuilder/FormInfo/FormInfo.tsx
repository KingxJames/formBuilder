import { Box, Button, Typography, useMediaQuery, Modal } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PublishIcon from "@mui/icons-material/Publish";
import React from "react";

interface FormInfoProps {
  name: string;
  onPreviewClick?: () => void;
  children?: React.ReactNode; // This will be your form content to preview
}

export const FormInfo: React.FC<FormInfoProps> = ({
  name,
  onPreviewClick,
  children,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [openPreview, setOpenPreview] = React.useState(false);

  const handlePreviewClick = () => {
    setOpenPreview(true);
    if (onPreviewClick) {
      onPreviewClick(); // Call the prop if it exists
    }
  };

  const handleClosePreview = () => {
    setOpenPreview(false);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: "4px",
          backgroundColor: "#fff",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Header Box */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "16px",
            boxSizing: "border-box",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {/* Left-aligned Typography */}
          <Typography
            variant={isMobile ? "subtitle1" : "h6"}
            sx={{ fontWeight: "600" }}
          >
            {name}
          </Typography>

          {/* Right-aligned Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            <Button
              size={isMobile ? "small" : "medium"}
              sx={{
                color: "black",
                backgroundColor: "transparent",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
              }}
            >
              Cancel
            </Button>

            <Button
              size={isMobile ? "small" : "medium"}
              sx={{
                color: "black",
                backgroundColor: "transparent",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
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
                "&:hover": { backgroundColor: "#6a1b7a" },
              }}
              onClick={handlePreviewClick}
            >
              Preview
              <RemoveRedEyeIcon
                fontSize={isMobile ? "small" : "medium"}
                sx={{ ml: 1 }}
              />
            </Button>

            <Button
              variant="contained"
              size={isMobile ? "small" : "medium"}
              sx={{
                color: "#fff",
                backgroundColor: "#7d2d91",
                "&:hover": { backgroundColor: "#6a1b7a" },
              }}
            >
              Publish
              <PublishIcon
                fontSize={isMobile ? "small" : "medium"}
                sx={{ ml: 1 }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FormInfo;
