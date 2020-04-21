const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({
            node,
            getNode,
            basePath: "mini-pages",
        })

        createNodeField({
            node,
            name: "slug",
            value: slug,
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return graphql(`
    {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }      
    `).then(result => {
        const pages = result.data.allMarkdownRemark.edges

        pages.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/contact-page.js"),
                context: {
                    slug: node.fields.slug
                }
            })
        })
    })
}