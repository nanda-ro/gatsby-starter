import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Box, Container, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as styles from './blog-post.module.css';

export default function BlogPost({ data }) {
  const post = data.mdx

  return (
    <Container maxWidth="false">
      <Header/>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <small>{post.frontmatter.date}</small>
          <MDXProvider>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </div>
        </Box>
      </Container>
      <Footer/>
    </Container>
  );
};

export const query = graphql`
  query BlogQuery($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        date
      }
    }
  }
`
