import {css} from "styled-components";
import {COLORS, WEIGHTS} from "../../constants";

export const vars = css`
  :root {
    --clr-gray-100: ${COLORS.gray["100"]};
    --clr-gray-300: ${COLORS.gray["300"]};
    --clr-gray-500: ${COLORS.gray["500"]};
    --clr-gray-700: ${COLORS.gray["700"]};
    --clr-gray-900: ${COLORS.gray["900"]};
    --clr-primary: ${COLORS.primary};
    --clr-secondary: ${COLORS.secondary};
    --clr-white: ${COLORS.white};
    
    --font-normal: ${WEIGHTS.normal};
    --font-medium: ${WEIGHTS.medium};
    --font-bold: ${WEIGHTS.bold};
  }
`