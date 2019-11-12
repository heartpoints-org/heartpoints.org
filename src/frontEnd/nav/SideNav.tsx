import * as React from "react";
import { Drawer, IconButton, Divider, List, ListItemIcon, ListItemText, withStyles, ListItem, AppBar, Collapse } from "@material-ui/core";

import InboxIcon from '@material-ui/icons/MoveToInbox';
import Language from '@material-ui/icons/Language';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import Search from '@material-ui/icons/Search';
import PanTool from '@material-ui/icons/PanTool';
import Favorite from '@material-ui/icons/Favorite';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { isMobile } from '../site/isMobile';

export const SideNavUnstyled = ({isSideNavOpen, isSideNavExpanded, onSideNavExpandRequested, classes, onSideNavCollapseRequested}) => {

    return <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={isSideNavOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => onSideNavCollapseRequested()}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={() => onSideNavCollapseRequested("/") }>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={onSideNavExpandRequested}>
              <ListItemIcon><Language /></ListItemIcon>
              <ListItemText primary="Organizations" />
              {isSideNavExpanded ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={isSideNavExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
             <ListItem button className={classes.nested} onClick={() => onSideNavCollapseRequested("/organizations/new")}>
              <ListItemIcon>
                <AddCircleOutline />
              </ListItemIcon>
              <ListItemText primary="Create New" />
             </ListItem>
             <ListItem button className={classes.nested} onClick={() => onSideNavCollapseRequested("/organizations/search")}>
              <ListItemIcon>
                <Search />
              </ListItemIcon>
              <ListItemText primary="Search" />
             </ListItem>
            </List>
            </Collapse>
            <ListItem button onClick={() => onSideNavCollapseRequested("/volunteering/search")}>
              <ListItemIcon><PanTool /></ListItemIcon>
              <ListItemText primary="Volunteering" />
            </ListItem>
            <ListItem button onClick={() => onSideNavCollapseRequested("/") }>
              <ListItemIcon><Favorite /></ListItemIcon>
              <ListItemText primary="My Heart Collection" />
            </ListItem>
            <ListItem button onClick={() => onSideNavCollapseRequested("/castleRisk") }>
              <ListItemIcon><DonutSmallIcon /></ListItemIcon>
              <ListItemText primary="Castle Risk" />
            </ListItem>
            <ListItem button onClick={() => onSideNavCollapseRequested("/rest-guru") }>
              <ListItemIcon><DonutSmallIcon /></ListItemIcon>
              <ListItemText primary="rest.guru" />
            </ListItem>
          </List>
    </Drawer>
}

const drawerWidth = () => isMobile()
  ? window.innerWidth
  : 240;

const styles = theme => ({
  drawer: {
    display: 'flex',
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

export const SideNav = withStyles(styles, { withTheme: true })(SideNavUnstyled);