import styled, { css } from "styled-components";

const text = css`
  text-align: center;
`;

/* eslint-disable no-constant-condition */
const Heading = styled.h1`
  font-size: ${10 > 5 ? "30px" : "5px"};
  font-weight: 600;
  background-color: forestgreen;
  ${text}
`;
/* eslint-enable no-constant-condition */

export default Heading;
