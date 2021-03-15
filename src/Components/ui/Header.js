import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  useScrollTrigger,
  Typography,
  Tabs,
  Tab,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { Link } from "react-router-dom";

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
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
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
                label="Projects"
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
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
