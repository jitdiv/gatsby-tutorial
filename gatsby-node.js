exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
      query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
}