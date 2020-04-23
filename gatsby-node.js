const axios = require('axios')

const getPages = uri => axios.get(uri).then(response => response.data)

exports.createPages = async ({ actions: { createPage } }) => {

    const [pages] = await Promise.all([ getPages('https://sendwhats.herokuapp.com/contacts')])

    pages.forEach(user => {
        createPage({
            path: `/${user.link}/`,
            component: require.resolve("./src/templates/contact-page.js"),
            context: { user },
        })
    })
}