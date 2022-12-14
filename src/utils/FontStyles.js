/* font styles for styled components */

import { createGlobalStyle } from "styled-components";
import inter_regular from "../assets/inter/Inter-Regular.otf";
import inter_extra_bold from "../assets/inter/Inter-ExtraBold.otf";
import inter_light from "../assets/inter/Inter-Light.otf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Inter Regular';
  src: url(${inter_regular}) format("opentype");
      
}

@font-face {
  font-family: 'Inter Extra Bold';
  src: url(${inter_extra_bold}) format("opentype");
      
}

@font-face {
  font-family: 'Inter Light';
  src: url(${inter_light}) format("opentype");
      
}
`;

export default FontStyles;
