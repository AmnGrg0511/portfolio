import { useState } from "react";
import { IconButton, Popover, Box, Typography, Paper } from "@material-ui/core";
import { RiMoonClearFill } from "react-icons/ri";
import { ImSun } from "react-icons/im";
import { FiGithub } from "react-icons/fi";
import {
  blue,
  deepOrange,
  purple,
  pink,
  red,
  green,
  indigo,
} from "@material-ui/core/colors";
import { InvertColors } from "@material-ui/icons";
import { motion } from "framer-motion";
import { SiApollographql } from "react-icons/si";

export const Header = ({ dark, setDark, setPalette }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleMode = () => {
    setDark((prev) => {
      localStorage.setItem("dark", prev ? "F" : "T");
      return !prev;
    });
  };

  const handlePalette = (i) => {
    localStorage.setItem("palette", `${i}`);
    setPalette(i);
  };

  const togglePalettePicker = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen((prev) => !prev);
  };
  return (
    <Paper
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderRadius: 10,
        padding: "0 2rem",
        position: "sticky",
        top: -8,
        zIndex: 100,
      }}
    >
      <Typography
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        component={motion.div}
        style={{
          fontFamily: "Fascinate Inline",
          fontSize: 60,
          scale: 0,
          display: "flex",
          padding: 16,
        }}
      >
        <SiApollographql />
      </Typography>
      <Box display="flex" alignItems="center">
        <Box p={1}>
          <IconButton onClick={togglePalettePicker}>
            <InvertColors />
          </IconButton>
        </Box>
        <Popover
          open={open}
          anchorEl={anchorEl}
          anchorReference={"anchorEl"}
          onClose={togglePalettePicker}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Box p={1}>
            {[blue, deepOrange, purple, pink, red, green, indigo].map(
              (color, i) => (
                <IconButton onClick={() => handlePalette(i)}>
                  <div
                    style={{
                      backgroundColor: color[400],
                      width: 16,
                      height: 16,
                      borderRadius: 8,
                    }}
                  />
                </IconButton>
              )
            )}
          </Box>
        </Popover>

        <Box p={1}>
          <IconButton onClick={handleMode}>
            {dark ? <ImSun /> : <RiMoonClearFill />}
          </IconButton>
        </Box>

        <Box p={1}>
          <IconButton>
            <FiGithub />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};
