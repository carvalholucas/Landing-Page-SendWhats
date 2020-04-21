exports.createPages = async ({ actions: { createPage } }) => {
    const allUsers = [
        { name: 'Lucas Carvalho', link: 'lucassmc', numberWhatsapp: '+5519991755721', message: 'Olá, gostária de falar com você' },
        { name: 'Anna Luiza', link: 'annagomes', numberWhatsapp: '+5519991755721', message: 'Olá, gostária de falar com você' },
        { name: 'Frontend Criativo', link: 'frontendcriativo', numberWhatsapp: '+5519991755721', message: 'Olá, gostária de falar com você'}
    ]

    allUsers.forEach(user => {
        createPage({
            path: `/${user.link}/`,
            component: require.resolve("./src/templates/contact-page.js"),
            context: { user },
        })
    })
}