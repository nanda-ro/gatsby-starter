import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

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
    <AppBar position="static" color="transparent" elevation="0">
      <Container>
        <Toolbar>
          <Typography variant="h6" color="inherit" component="div">{title}</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
