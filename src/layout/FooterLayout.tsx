import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Footer from "../components/Footer";

const AppLayout: React.FC = () => {
  return (
    <>
      <CssBaseline /> {/* Add this to reset some default browser styles */}
      {/* Add your main content here */}
      <Box
        component="main"
        sx={{
          position: "relative",
        }}
      >
      </Box>

      {/* Footer component */}
      <Footer />
    </>
  );
};

export default AppLayout;
