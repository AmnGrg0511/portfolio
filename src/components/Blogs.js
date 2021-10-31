import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import blogs from "../data/blogs";

const useStyles = makeStyles((theme) => ({}));

export const Blogs = () => {
  const classes = useStyles();
  return (
    <Box id="blogs" py={12} mx={4}>
      <Typography style={{ padding: "20px 0" }}>Blogs</Typography>
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid xs={12} sm={6} md={3} item>
            <Paper style={{ padding: 10, textAlign: "center" }}>
              {blog.logo}
              <Typography>{blog.site}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
