import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: inter;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: #0F172A;
  }

  p {
    margin: 0;
    color:#334155;
  }

  ul{
    padding: 0;
    margin: 0;
  }

  .slick-prev,
.slick-next {
  display: none !important;
}

.slick-slide>div {
  margin: 0 8px; 
}

.slick-list {
}

@media (max-width: 480px) {
  .slick-slide > div {
    margin: 0 0px; 
  }
}

`;

export default GlobalStyle;
