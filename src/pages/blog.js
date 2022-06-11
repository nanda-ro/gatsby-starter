import React from "react"
import { graphql } from "gatsby"
import { Box, Container } from '@mui/material';
import Header from '../components/Header';
import Copyright from '../components/Copyright';

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <Container maxWidth="false">
      <Header/>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>

      {posts.map(post => (
        <article key={post.node.id}>
          <h2>{post.node.frontmatter.title}</h2>
          <small>{post.node.frontmatter.author}, {post.node.frontmatter.date}</small>
          <p>{post.node.excerpt}</p>
        </article>
      ))}
          <Copyright />
        </Box>
      </Container>
    </Container>
  );
};

export const pageQuery = graphql`
  query MyQuery {
    blog: allMdx {
      posts: edges {
        node {
          frontmatter {
            date(fromNow: true)
            title
            author
          }
          excerpt
          id
        }
      }
    }
  }
`
