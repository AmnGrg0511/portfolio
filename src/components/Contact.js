import { Box, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IoCopyOutline } from "react-icons/io5";
import { TiSocialAtCircular } from "react-icons/ti";

const useStyles = makeStyles((theme) => ({}));

export const Contact = () => {
  const classes = useStyles();
  return (
    <Box id="contact" py={12} mx={4}>
      <Typography style={{ padding: "20px 0" }}>Contact</Typography>
      <Grid container spacing={4}>
        {["amngrg0511@gmail.com", "aman_11815151@nitkkr.ac.in"].map((e) => (
          <Grid xs={12} md={6} item>
            <Paper
              style={{
                padding: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box display="flex" alignItems="center">
                <TiSocialAtCircular style={{ width: 40, height: 30 }} />
                <Typography>{e}</Typography>
              </Box>
              <IconButton>
                <IoCopyOutline />
              </IconButton>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
