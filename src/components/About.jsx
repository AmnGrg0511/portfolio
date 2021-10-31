import { Box, Button, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const About = () => {
  const [curr, setCurr] = useState([0, 0, true, 0]);

  const roles = [
    "Developer",
    "Engineer",
    "Programmer",
    "Coder",
    "Designer",
    "Mentor",
  ];

  useEffect(() => {
    setTimeout(() => {
      setInterval(() => {
        setCurr((prev) => {
          let write = prev[2],
            word = prev[0],
            blink = prev[3];
          if (prev[1] >= roles[prev[0]].length || prev[1] < 0) {
            blink = prev[3] + 1;
          }
          if (prev[1] === roles[prev[0]].length + 4 || prev[1] === -2) {
            write = !write;
            prev[1] === -2 && (word = (word + 1) % roles.length);
          }
          return [word, prev[1] + (write ? 1 : -1), write, blink];
        });
      }, 100);
    }, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box id="about" mx={4} py={16}>
      <Typography
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        component={motion.div}
        variant="h5"
        style={{
          margin: "20px 0",
          opacity: 0,
          translateY: 50,
          display: "flex",
          alignItems: "baseline",
          flexWrap: "wrap",
        }}
      >
        <span style={{ whiteSpace: "nowrap", marginRight: 10 }}>
          My Name is
        </span>
        <span
          style={{
            fontFamily: "Kanit",
            fontSize: 32,
            marginBottom: 10,
            whiteSpace: "nowrap",
          }}
        >
          Aman Garg
        </span>
      </Typography>
      <Typography
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        component={motion.div}
        variant="h3"
        style={{
          margin: "20px 0",
          opacity: 0,
          display: "flex",
          flexWrap: "wrap",
          minHeight: 80,
          translateY: 50,
        }}
      >
        <div style={{ marginRight: "1rem" }}>
          I am a{curr[0] !== 1 ? "" : "n"}
        </div>
        <div style={{ minWidth: "12rem", minHeight: "2.3rem" }}>
          {roles[curr[0]].substring(0, curr[1])}
          {curr[3] % 3 === 0 ? "_" : " "}
        </div>
      </Typography>
      <Button
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        component={motion.div}
        size="large"
        variant="contained"
        color="primary"
        style={{
          fontSize: "1.25rem",
          marginRight: 20,
          marginTop: 20,
          scale: 0,
        }}
      >
        Resume
      </Button>
      <Link to="contact" smooth>
        <Button
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          component={motion.div}
          size="large"
          variant="outlined"
          color="primary"
          style={{
            fontSize: "1.25rem",
            marginTop: 20,
            scale: 0,
          }}
        >
          Let's Talk
        </Button>
      </Link>
    </Box>
  );
};
