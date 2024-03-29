import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, IconButton, Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
  },
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
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: "white",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function UserAvatar({ redirect = "/", style }) {
  const user = useSelector(({ auth }) => auth);
  const classes = useStyles();

  return user ? (
    <IconButton href={`#profile`}>
      <Avatar className={classes.small} src={user ? user.photoURL : ""}>
        A
      </Avatar>
    </IconButton>
  ) : (
    <Button
      className={classes.button}
      href={`?redirect=${redirect}#/login`}
      style={style}
    >
      Sign In
    </Button>
  );
}
