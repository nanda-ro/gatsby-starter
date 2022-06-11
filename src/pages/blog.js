import React from "react"
import { graphql } from "gatsby"

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <div>
      <h1>My blog posts</h1>

      {posts.map(post => (
        <article key={post.node.id}>
          <h2>{post.node.frontmatter.title}</h2>
          <small>{post.node.frontmatter.author}, {post.node.frontmatter.date}</small>
          <p>{post.node.excerpt}</p>
        </article>
      ))}
    </div>
  )
}

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
