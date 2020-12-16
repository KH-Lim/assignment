import React from "react";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";

const Header = React.lazy(() => import("./Header"));

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
}));

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader}></div>
        {children}
      </div>

    </>
  );
};

export default Layout;


