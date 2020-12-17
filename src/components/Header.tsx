import React from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const Menu = React.lazy(() => import('./Menu'));

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuTop: {
    height: '64px'
  },

  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  hide: {
    display: 'none',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
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
  colorWhite: {
    color: 'white'
  }
}));

interface HeaderProps {
  open: boolean;
  setOpen: any;
}

const Header: React.FC<HeaderProps> = ({ open, setOpen }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            color="inherit"
            aria-label="menu"
            onClick={() => { setOpen(true); }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Assignment
          </Typography>
          <Button color="primary" >
            <Link to='./login' className={classes.colorWhite}>
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <IconButton
          className={classes.menuTop}
          onClick={() => { setOpen(false); }} >
          <ChevronLeftIcon />
        </IconButton>
        <Divider />
        <Menu />
      </Drawer>
    </>
  );
};

export default Header;
