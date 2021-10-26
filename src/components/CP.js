import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cp from "../data/cp.json";

const useStyles = makeStyles((theme) => ({}));

export const CP = () => {
  const classes = useStyles();
  return (
    <Box id="cp" py={12} mx={4}>
      <Typography style={{ padding: "20px 0" }}>Competitive Programming</Typography>
      <Grid container spacing={4}>
        {cp.map((site) => (
          <Grid xs={12} sm={4} item>
            <Paper style={{ padding: 10 }}>
              <Typography>{site.name}</Typography>
              <Typography>{site.rating}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
