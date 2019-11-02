import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Contact from "../components/contact"

const Cara = () => (
  <Layout>
    <Parallax pages={4}>
      <Hero offset={0} />
      <Projects offset={1} />
      <Contact offset={3} />
    </Parallax>
  </Layout>
)

export default Cara
