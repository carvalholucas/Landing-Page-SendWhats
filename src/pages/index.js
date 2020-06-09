import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Hero from "../components/Hero"
import How from "../components/How"
import Benefit from "../components/Benefit"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Header />
		<Hero />
		<How />
		<Benefit />
		<Contact />
		<Footer />
	</Layout>
)

export default IndexPage
