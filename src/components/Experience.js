import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import experience from "../data/experience";

const useStyles = makeStyles((theme) => ({}));

export const Experience = ({ dark }) => {
  const classes = useStyles();
  return (
    <Box id="experience" py={12} mx={4}>
      <Typography style={{ padding: "20px 0" }}>Experience</Typography>
      <Grid container spacing={4}>
        {experience.map((exp) => (
          <Grid xs={12} sm={6} item>
            <Paper
              style={{
                padding: 10,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div style={{ width: "30%" }}>
                <img width="100%" height="auto" src={dark ? exp.logoDark ?? exp.logo : exp.logo} />
              </div>
              <div>
                <Typography variant="h6">{exp["company name"]}</Typography>
                <Typography>{exp.designation}</Typography>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
