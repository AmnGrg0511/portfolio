import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import skills from "../data/skills";

const useStyles = makeStyles((theme) => ({}));

export const Skills = () => {
  const classes = useStyles();
  return (
    <Box id="skills" py={12} mx={4}>
      <Typography>Skills</Typography>
      {[
        { header: "Programming Languages", skillKey: "programming languages" },
        { header: "Libraries/Frameworks", skillKey: "frameworks" },
        { header: "Databases", skillKey: "databases" },
        { header: "Tools/Platforms", skillKey: "platforms" },
      ].map((e) => (
        <>
          <Typography style={{ padding: "40px 0 20px" }}>
            {e.header}
          </Typography>
          <Grid container spacing={4}>
            {skills[e.skillKey].map((skill) => (
              <Grid xs={6} sm={4} md={3} lg={2} item>
                <Paper style={{ padding: 10, textAlign: "center" }}>
                  {skill.logo}
                  <Typography>{skill.name}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </>
      ))}
    </Box>
  );
};
