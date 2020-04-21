import React from 'react'

const ContactPage = ({ pageContext: { user } }) => (
    <div style={{ width: 960, margin: "4rem auto" }}>
        <h1>{user.name}</h1>
        <p>Envie uma mensagem para {user.name}</p>
        <br/>
        <br/>
        <a href={`https://api.whatsapp.com/send?phone=${user.numberWhatsapp}&text=${user.message}`} target="_blank" rel="noopener noreferrer" style={{ padding: 15, background: '#278a65', color: "#fff", textDecoration: "none"}}>Enviar mensagem</a>
    </div>
)

export default ContactPage
