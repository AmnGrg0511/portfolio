import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import projects from "../data/projects";

const useStyles = makeStyles((theme) => ({}));

export const Works = () => {
  const classes = useStyles();
  return (
    <Box id="works" py={12} mx={4}>
      <Typography style={{ padding: "20px 0" }}>Projects</Typography>
      <Grid container spacing={4}>
        {projects.main.map((project) => (
          <Grid xs={12} md={6} lg={3} item>
            <Paper
              style={{ padding: 10, display: "flex", alignItems: "center" }}
            >
              {project.logo}
              <div>
                <Typography variant="h6">{project.name}</Typography>
                <Typography>{project.sub}</Typography>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Typography style={{ padding: "40px 0 20px" }}>Side Projects</Typography>
      <Grid container spacing={4}>
        {projects.side.map((project) => (
          <Grid xs={12} md={6} lg={3} item>
            <Paper
              style={{ padding: 10, display: "flex", alignItems: "center" }}
            >
              {project.logo}
              <div>
                <Typography variant="h6">{project.name}</Typography>
                <Typography>{project.sub}</Typography>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
