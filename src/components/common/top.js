import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Top() {
  const classes = useStyles();
  return (
    <AppBar position="relative">
        <Toolbar>
          <SupervisedUserCircleIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            PPE Wholesale &lt;3 US
          </Typography>
        </Toolbar>
      </AppBar>
  )
}