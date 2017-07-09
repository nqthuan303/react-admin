// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Face from 'material-ui-icons/Face';
import ChromeReaderMode from 'material-ui-icons/ChromeReaderMode';

const styleSheet = createStyleSheet('Sidebar', theme => ({
  root: {
    width: '260px',
    display: 'inline-block',
    background: theme.palette.background.paper,
  },
}));

function Sidebar(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <Face />
          </ListItemIcon>
          <ListItemText primary="Quản lý user" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ChromeReaderMode />
          </ListItemIcon>
          <ListItemText primary="Quản lý bài viết" />
        </ListItem>
      </List>
    </div>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Sidebar);