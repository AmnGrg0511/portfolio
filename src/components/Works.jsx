import { Box, Grid, Link, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import projects from "../data/projects";
import copy from "../functions/copy";

const useStyles = makeStyles((theme) => ({}));

export const Works = () => {
  const classes = useStyles();
  return (
    <Box id="works" py={12} mx={4}>
      <Typography
        variant="h5"
        style={{ padding: "20px 0" }}
        onClick={() => copy("works", true)}
      >
        <Link style={{ cursor: "pointer" }}>#</Link>Projects
      </Typography>
      {["main", "side"].map((e) => (
        <>
          <Typography
            style={{ padding: "20px 0", textTransform: "capitalize" }}
          >
            {e} Projects
          </Typography>
          <Grid container spacing={4}>
            {projects[e].map((project) => (
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
        </>
      ))}
    </Box>
  );
};
