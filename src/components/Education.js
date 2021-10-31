import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import education from "../data/education";

const useStyles = makeStyles((theme) => ({}));

export const Education = () => {
  const classes = useStyles();
  return (
    <Box id="education" py={12} mx={4}>
      <Typography style={{ padding: "20px 0" }}>Education</Typography>
      <Grid container spacing={4}>
        {education.schools.map((school) => (
          <Grid xs={12} md={6} item>
            <Paper style={{ padding: 10, display: "flex", alignItems: "center" }}>
              <div>
                <img width="auto" height="120" src={school.logo} />
              </div>
              <div>
                <Typography variant="h6">{school.name}</Typography>
                <Typography>{school.location}</Typography>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
