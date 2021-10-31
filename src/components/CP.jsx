import { Box, Grid, Paper, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cp from "../data/cp";
import copy from "../functions/copy";

const useStyles = makeStyles((theme) => ({}));

export const CP = () => {
  const classes = useStyles();
  return (
    <Box id="cp" py={12} mx={4}>
      <Typography variant="h5" style={{ padding: "20px 0" }}>
        <Link style={{ cursor: "pointer" }} onClick={() => copy("cp", true)}>
          #
        </Link>
        Competitive Programming
      </Typography>
      <Typography style={{ padding: "20px 0" }}></Typography>
      <Grid container spacing={4}>
        {cp.map((site) => (
          <Grid xs={12} sm={6} md={4} item>
            <Paper style={{ padding: 10, textAlign: "center" }}>
              {site.logo}
              <Typography>{site.name}</Typography>
              <Typography>{site.rating}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
