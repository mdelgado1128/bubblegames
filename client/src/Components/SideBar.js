//-------------IMPORTS------------------------//
import React from 'react';
import clsx from 'clsx';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid';
import '../App.css';
//-----------------------------------------------//
//----------------STYLING------------------------//
//-------------Material UI joe-------------------//
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
//------------------------------------------------//
//-----------export Sidebar-----------------------//
//*notes* Finish logout Func----------------------//
export default function SideBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: true,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Link to="/">
      <List>
        {['Home'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <LocalBarIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      </Link>
      <Divider />
      <List>
      <Link to="/Login">
        {['Logout'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>                                 
        ))}
        </Link>
      </List> 
    </div>                                                         
  );

  return (
    <div>
      <Grid container direction='column' spacing={2} alignItems='center'>
      {["Side Bar"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button color="primary" onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
      </Grid>
    </div>
  );
}
//---------------------------------------------------------------------//
//---------------------add href for link below-------------------------//
// facebook page url https://www.facebook.com/Bubble-Games-109718827921302