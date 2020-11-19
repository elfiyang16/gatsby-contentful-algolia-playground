const queries = [
  {
    query: `
      {
        allContentfulBlogPost {
          edges {
            node {
              id
              author {
                name
              }
              slug
              description {
                description
              }
              body {
                body
              }
              tags
              publishDate
              title
            }
          }
        }
      }
    `,
    transformer: ({ data }) =>
      data.allContentfulBlogPost.edges.map(
        ({
          node: {
            id,
            author: { name },
            title,
            tags,
            slug,
            description: { description },
            body: { body },
          },
        }) => ({
          objectID: id,
          title,
          tags,
          slug,
          description: description,
          body: body,
          author: name,
        })
      ),
    indexName: `gatsby-test`,
  },

  // {
  //   query: `
  //       {
  //         allMarkdownRemark {
  //           edges {
  //             node {
  //               excerpt
  //               frontmatter {
  //                 title
  //               }
  //               fields {
  //                 slug
  //               }
  //             }
  //           }
  //         }
  //       }
  //     `,
  //   transformer: ({ data }) =>
  //     data.allMarkdownRemark.edges.map(
  //       ({
  //         node: {
  //           excerpt,
  //           frontmatter: { title },
  //           fields: { slug },
  //         },
  //       }) => ({
  //         title,
  //         description: excerpt,
  //         path: slug,
  //       })
  //     ),
  //   indexName: `gatsby-test`,
  // },
]

module.exports = queries
