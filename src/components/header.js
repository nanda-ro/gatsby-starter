import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { AppBar, Toolbar, Typography } from '@mui/material';
import Navigation from './Navigation';

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>{title}</Typography>
        <Navigation/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
