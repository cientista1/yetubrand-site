import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 :root {
  --primary: #913D76;
  --secondary: #080F1C;
  --title-color : #913D76;
  --text-color : #000000;
  --text-active-color: #913D76;
  --button-text-color : #fff;
  --button-primary-color: #00aeff;
  --button-secondary-color: #FF1919;
  --background: #f8f8f8;
  --color-white: #ffffff;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  color: var(--white);
}

html , body, #root {
  max-height: 100vh;
  max-width : 100vw;

  width: 100%;
  height: 100%;
}

*, button , input {
  border:0;
  background: none;
  font-family: 'Poppins', sans-serif;
  -webkit-tap-highlight-color: transparent;
  
}

html {
  background: var(--background)
}

button.btn {
  color: var(--button-text-color);
  border: none;
  font-weight: bold;
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 25px;
  transition: .3s all;
  cursor: pointer;
  text-decoration: none;
}

button.primary-button {
  background: var(--button-primary-color);
}

button.secondary-button {
  background: var(--primary);
  padding: 15px 20px;
}

button.primary-button:hover{
  background: var(--primary);
} 
button.secondary-button:hover{
  background: var(--button-primary-color);
} 
*:focus {
  outline: 0 !important;
}
`;
 
export default GlobalStyle;