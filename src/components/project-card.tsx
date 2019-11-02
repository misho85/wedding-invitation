/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Form from './form'

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const ProjectCard = ({ children, bg }: ProjectCardProps) => (
  <div
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg || `none`,
    }}
  >
    <div sx={{ opacity: 0.75, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>
      <Form />
    </div>
    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    />

  </div>
)

export default ProjectCard
