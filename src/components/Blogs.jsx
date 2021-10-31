import { Box, Grid, Paper, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import blogs from "../data/blogs";
import copy from "../functions/copy";

const useStyles = makeStyles((theme) => ({}));

export const Blogs = () => {
  const classes = useStyles();
  return (
    <Box id="blogs" py={12} mx={4}>
      <Typography variant="h5" style={{ padding: "20px 0" }}>
        <Link style={{ cursor: "pointer" }} onClick={() => copy("blogs", true)}>
          #
        </Link>
        Blogs
      </Typography>
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
