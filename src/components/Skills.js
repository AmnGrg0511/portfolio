import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import skills from "../data/skills.json"

const useStyles = makeStyles((theme) => ({}));

export const Skills = () => {
  const classes = useStyles();
  return (
    <Box id="skills" py={12} mx={4}>
      <Typography>Skills</Typography>
      <Typography style={{ padding: "40px 0 20px" }}>Programming Languages</Typography>
      <Grid container spacing={4}>
        {skills["programming languages"].map((skill) => (
          <Grid xs={12} sm={6} md={3} lg={2} item>
            <Paper style={{ padding: 10 }}>
              <Typography>{skill.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Typography style={{ padding: "40px 0 20px" }}>Libraries/Frameworks</Typography>
      <Grid container spacing={4}>
        {skills["frameworks"].map((skill) => (
          <Grid xs={12} sm={6} md={3} lg={2} item>
            <Paper style={{ padding: 10 }}>
              <Typography>{skill.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Typography style={{ padding: "40px 0 20px" }}>Databases</Typography>
      <Grid container spacing={4}>
        {skills["databases"].map((skill) => (
          <Grid xs={12} sm={6} md={3} lg={2} item>
            <Paper style={{ padding: 10 }}>
              <Typography>{skill.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Typography style={{ padding: "40px 0 20px" }}>Tools/Platforms</Typography>
      <Grid container spacing={4}>
        {skills["platforms"].map((skill) => (
          <Grid xs={12} sm={6} md={3} lg={2} item>
            <Paper style={{ padding: 10 }}>
              <Typography>{skill.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
