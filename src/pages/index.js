import React from "react"
import { graphql, Link } from "gatsby"
import { Box, Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = ({ data }) => {
  const { posts } = data.blog

  return (
    <Container maxWidth="false">
      <Header/>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
            {posts.map(post => (
              <article key={post.node.id}>
                <Link to={`/blog/${post.node.slug}/`}>
                  <h2>{post.node.frontmatter.title}</h2>
                </Link>
                <small>
                  {post.node.frontmatter.author}, {post.node.frontmatter.date}
                </small>
                <p>{post.node.excerpt}</p>
              </article>
            ))}
        </Box>
      </Container>
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
