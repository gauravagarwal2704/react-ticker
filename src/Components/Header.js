import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const Header = () => (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" type="title" color="inherit">
            CryptoTracker
          </Typography>
        </Toolbar>
      </AppBar>
);


export default Header;
