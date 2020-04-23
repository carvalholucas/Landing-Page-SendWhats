import React from 'react'

const ContactPage = ({ pageContext: { user } }) => {
    return (
        <div style={{ width: 960, margin: "4rem auto" }}>
            <h1>Nome</h1>
            <p>Adicionar o nome no DB e na API</p>
            <br />
            <p>{user.link}</p>
            <br />
            <br />
            <a href={`https://api.whatsapp.com/send?phone=${user.number}&text=${user.message}`} target="_blank" rel="noopener noreferrer" style={{ padding: 15, background: '#278a65', color: "#fff", textDecoration: "none" }}>Enviar mensagem</a>
        </div>
    )
}

export default ContactPage
