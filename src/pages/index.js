import React from "react"
import { graphql, Link } from "gatsby"
import { Container, Box, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = ({ data }) => {
  const { posts } = data.blog

  return (
    <Container maxWidth="lx">
      <Header/>
      <Box sx={{ my: 20 }}>
        <Typography variant="h1" align="center">
          Hi.
        </Typography>
      </Box>
      <Footer/>
    </Container>
  )
}

export const pageQuery = graphql`
  query HomeQuery {
    blog: allMdx {
      posts: edges {
        node {
          slug
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
export default Home;
