import styled, { css } from "styled-components";

// const text = `text-align: center`;
// const text = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

/* font-size: ${10 > 5 ? "30px" : "5px"} */
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3remm;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}

  line-height: 1.4;
`;
//   background-color: yellow;
/* ${text} */

export default Heading;
