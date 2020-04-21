import React from 'react'
import { graphql } from "gatsby"

const ContactPage = ({ data }) => {
    const account = data.markdownRemark.frontmatter

    return (
        <>
            <h1>Account Number: {account.name}</h1>
            <p>{account.description}</p>
            <hr/>
            <p>Whatsapp Number: {account.number}</p>
            <p>Message: {account.message}</p>
        </>
    )
}

export const query = graphql`
    query Post($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                name
                number
                message
                description
            }
        }
    }
`

export default ContactPage
