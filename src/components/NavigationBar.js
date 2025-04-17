import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import UploadIcon from "@mui/icons-material/CloudUpload";
import AssessmentIcon from "@mui/icons-material/Assessment";

const NavigationBar = () => {
  return (
    <AppBar position="static" className="custom-appbar">
      <Toolbar className="nav-toolbar">
        <div className="nav-logo">
          <Typography variant="h6" className="logo-text">
            🧠 Radiology AI
          </Typography>
        </div>
        <div className="nav-links">
          <IconButton color="inherit" title="Home">
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit" title="Upload">
            <UploadIcon />
          </IconButton>
          <IconButton color="inherit" title="Results">
            <AssessmentIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
