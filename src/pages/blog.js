import React from "react"
import { graphql } from "gatsby"
import { Box, Container, Card, CardActionArea, CardContent, Typography, Link } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = ({ data }) => {
  const { posts } = data.blog

  return (
    <Container maxWidth="false">
      <Header/>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          {posts.map(post => (
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea href={`/blog/${post.node.slug}/`}>
                <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {post.node.frontmatter.title}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    {post.node.frontmatter.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.node.excerpt}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
      <Footer/>
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
          slug
        }
      }
    }
  }
`
export default Blog;
