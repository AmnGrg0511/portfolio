import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import experience from "../data/experience.json";

const useStyles = makeStyles((theme) => ({}));

export const Experience = () => {
  const classes = useStyles();
  return (
    <Box id="experience" py={12} mx={4}>
      <Typography style={{ padding: "20px 0" }}>Experience</Typography>
      <Grid container spacing={4}>
        {experience.map((exp) => (
          <Grid xs={12} sm={6} item>
            <Paper style={{ padding: 10 }}>
              <Typography variant="h6">{exp["company name"]}</Typography>
              <Typography>{exp.designation}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
