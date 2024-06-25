import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
html {
  // 1rem = 10px
  font-size:62.5%;
}
body{
  width: 100vw;
  height: 100vh;
  background-color: white;
  background-image: url("/src/assets/img/ChatHoshinoBG.png");
  background-size: cover;
  background-position: center center;
  /* background-repeat: no-repeat; */
  color: white;
  font-family: "MainFont"
}
#root {
  width: 100%;
  height: 100%;
}
a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
input, button {
  background-color: transparent;
  border: none;
  outline: none;
}
h1, h2, h3, h4, h5, h6{
  
}
ol, ul, li{
  list-style: none;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
`;

export default GlobalStyle;
