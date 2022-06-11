import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../components/Copyright';
import * as styles from './blog-post.module.css';

export default function BlogPost({ data }) {
  const post = data.mdx

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gatsby example
        </Typography>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <small>{post.frontmatter.date}</small>
          <MDXProvider>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </div>
        <Copyright />
      </Box>
    </Container>
  )
}

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
