import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  useScrollTrigger,
  Typography,
  Tabs,
  Tab,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {useTheme} from "@material-ui/core/styles"

import { Link } from "react-router-dom";

import useMediaQuery from "@material-ui/core/useMediaQuery"

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  title: {
    fontWeight: 700,
    // fontStyle: "italic",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/About" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/Projects" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/Technologies" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/Contact" && value !== 4) {
      setValue(4);
    }
  }, [value]);

  const tabs = (
    <React.Fragment>
      <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
            >
              <Tab
                label="Home"
                className={classes.tab}
                component={Link}
                to="/"
              />
              <Tab
                label="About Me"
                className={classes.tab}
                component={Link}
                to="/About"
              />
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                label="Projects"
                onMouseOver={(event) => handleClick(event)}
                className={classes.tab}
                component={Link}
                to="/Projects"
              />
              <Tab
                label="Technologies"
                className={classes.tab}
                component={Link}
                to="/Technologies"
              />
              <Tab
                label="Contact"
                className={classes.tab}
                component={Link}
                to="/Contact"
              />
            </Tabs>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              classes={{ paper: classes.menu }}
              elevation={0}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(2);
                }}
                component={Link}
                to="/Projects"
                classes={{ root: classes.menuItem }}
              >
                {" "}
                Projects{" "}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(2);
                }}
                component={Link}
                to="/project1"
                classes={{ root: classes.menuItem }}
              >
                {" "}
                Project1{" "}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(2);
                }}
                component={Link}
                to="/project2"
                classes={{ root: classes.menuItem }}
              >
                {" "}
                Project2{" "}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(2);
                }}
                component={Link}
                to="/project3"
                classes={{ root: classes.menuItem }}
              >
                {" "}
                Project3{" "}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(2);
                }}
                component={Link}
                to="/project4"
                classes={{ root: classes.menuItem }}
              >
                {" "}
                Project4{" "}
              </MenuItem>
            </Menu>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Button
              component={Link}
              to="/"
              disableRipple
              onClick={() => {
                setValue(0);
              }}
            >
              <Typography
                className={classes.title}
                variant="h3"
                color="secondary"
              >
                bayzel.io
              </Typography>
            </Button>
            {matches ? null : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
