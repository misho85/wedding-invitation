/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import ProjectsMDX from "../sections/projects.mdx"

const Projects = ({ offset }: { offset: number }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={2}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={2}>
      <Inner>
        <div
          sx={{
            display: `flex`,
            flexDirection: `column`,
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
          <ProjectsMDX />
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
      <UpDown>
        <SVG icon="claud" width={24} color="icon_brightest" left="85%" top="75%" />
        <SVG icon="claud" width={24} color="icon_teal" left="70%" top="20%" />
        <SVG icon="haert" width={24} color="icon_orange" left="25%" top="5%" />
        <SVG icon="circle" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="claud" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
        <SVG icon="claud" width={24} color="icon_brightest" left="90%" top="30%" />
        <SVG icon="circle" width={16} color="icon_yellow" left="70%" top="90%" />
        <SVG icon="haert" hiddenMobile width={16} color="icon_teal" left="18%" top="75%" />
        <SVG icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
        <SVG icon="claud" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
      <SVG icon="claud" width={16} color="icon_orange" left="10%" top="10%" />
      <SVG icon="claud" width={24} color="icon_yellow" left="29%" top="26%" />
      <SVG icon="haert" width={16} color="icon_red" left="75%" top="30%" />
      <SVG icon="haert" width={12} color="icon_yellow" left="80%" top="70%" />
    </Divider>
  </div>
)

export default Projects
