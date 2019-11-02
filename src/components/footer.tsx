/** @jsx jsx */
import { Footer as ThemeFooter, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  // const [colorMode, setColorMode] = useColorMode()
  // const isDark = colorMode === `dark`
  // const toggleColorMode = (e: any) => {
  //   setColorMode(isDark ? `light` : `dark`)
  // }

  return (
    <ThemeFooter>
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3, borderRadius: `0.5em` }}
        // onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {/* {isDark ? `Light` : `Dark`} */}
        {`Light`}
      </button>
    </ThemeFooter>
  )
}

export default Footer
