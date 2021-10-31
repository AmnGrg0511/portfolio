import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  Link,
  ListItemIcon,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { Link as RLink } from "react-scroll";
import {
  IoInformationOutline,
  IoSchoolOutline,
  IoGitBranchOutline,
  IoBriefcaseOutline,
  IoCopyOutline,
  IoCodeSlashOutline,
  IoMailOutline,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { Header } from "./components/Header";
import { About } from "./components/About";
import clsx from "clsx";
import { Works } from "./components/Works";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { CP } from "./components/CP";
import { Blogs } from "./components/Blogs";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { motion } from "framer-motion";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "inherit",
    transition: theme.transitions.create(["color"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create(
      ["width", "background-color", "color"],
      {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }
    ),
  },
  drawerClose: {
    transition: theme.transitions.create(
      ["width", "background-color", "color"],
      {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }
    ),
    overflowX: "hidden",
    width: theme.spacing(9) + 1,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4),
    },
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  item: {
    fontSize: "1.2rem",
    width: "auto",
  },
  icon: {
    color: theme.palette.primary.main,
    transition: theme.transitions.create(["color", "transform"], {
      duration: theme.transitions.duration.standard,
    }),
  },
}));

function Home({ dark, setDark, palette, setPalette }) {
  const classes = useStyles();
  const [open, setOpen] = useState(localStorage.getItem("open") === "T");
  const [curr, setCurr] = useState(0);

  const handleDrawerToggle = () => {
    setOpen((prev) => {
      localStorage.setItem("open", prev ? "F" : "T");
      return !prev;
    });
  };
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const items = {
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        stiffness: 1000,
      },
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 1000,
        velocity: -100,
      },
    },
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Hidden xsDown>
        <Drawer
          variant={"permanent"}
          open={true}
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton color="primary" onClick={handleDrawerToggle}>
              {open ? <IoChevronBack /> : <IoChevronForward />}
            </IconButton>
          </div>

          <div
            style={{
              height: "100%",
              alignItems: "center",
              display: "flex",
              overflow: "hidden",
            }}
          >
            <List
              variants={container}
              initial="hidden"
              animate="show"
              component={motion.ul}
              style={{ width: "100%" }}
            >
              {[
                ["About", <IoInformationOutline />],
                ["Works", <IoGitBranchOutline />],
                ["Experience", <IoBriefcaseOutline />],
                ["Skills", <VscSettings />],
                ["CP", <IoCodeSlashOutline />],
                ["Blogs", <IoCopyOutline />],
                ["Education", <IoSchoolOutline />],
                ["Contact", <IoMailOutline />],
              ].map((item, i) => (
                <Link
                  to={item[0].toLowerCase()}
                  component={RLink}
                  spy
                  smooth
                  underline="none"
                  onSetActive={() => setCurr(i)}
                >
                  <Tooltip title={open ? "" : item[0]} placement="right" arrow>
                    <ListItem
                      component={motion.li}
                      variants={items}
                      className={classes.item}
                      selected={curr === i}
                      button
                      key={item[0]}
                      style={{ borderRadius: 10, margin: "20px 10px" }}
                    >
                      <ListItemIcon className={curr === i ? classes.icon : ""}>
                        {item[1]}
                      </ListItemIcon>
                      <Typography color="textPrimary">{item[0]}</Typography>
                    </ListItem>
                  </Tooltip>
                </Link>
              ))}
            </List>
          </div>
        </Drawer>
      </Hidden>
      <Hidden smUp>
        <Drawer
          variant={open ? "temporary" : "permanent"}
          open={true}
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.toolbar}>
            <IconButton color="primary" onClick={handleDrawerToggle}>
              {open ? <IoChevronBack /> : <IoChevronForward />}
            </IconButton>
          </div>

          <div
            style={{
              height: "100%",
              alignItems: "center",
              display: "flex",
              overflow: "hidden",
            }}
          >
            <List
              variants={container}
              initial="hidden"
              animate="show"
              component={motion.ul}
              style={{ width: "100%" }}
            >
              {[
                ["About", <IoInformationOutline />],
                ["Works", <IoGitBranchOutline />],
                ["Experience", <IoBriefcaseOutline />],
                ["Skills", <VscSettings />],
                ["CP", <IoCodeSlashOutline />],
                ["Blogs", <IoCopyOutline />],
                ["Education", <IoSchoolOutline />],
                ["Contact", <IoMailOutline />],
              ].map((item, i) => (
                <Link
                  to={item[0].toLowerCase()}
                  component={RLink}
                  spy
                  smooth
                  underline="none"
                  onSetActive={() => setCurr(i)}
                >
                  <ListItem
                    component={motion.li}
                    variants={items}
                    className={classes.item}
                    selected={curr === i}
                    button
                    key={item[0]}
                    style={{ borderRadius: 10, margin: "20px 10px" }}
                  >
                    <ListItemIcon className={curr === i ? classes.icon : ""}>
                      {item[1]}
                    </ListItemIcon>
                    <Typography color="textPrimary">{item[0]}</Typography>
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        <Header
          dark={dark}
          setDark={setDark}
          palette={palette}
          setPalette={setPalette}
        />
        <About />
        <Works />
        <Experience dark={dark} />
        <Skills />
        <CP />
        <Blogs />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
