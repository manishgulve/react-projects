import styled from "styled-components";

const Heading = styled.h1`
  color: ${(props) => props.color || "#141414"};
  text-align: ${(props) => props.$textAlign || "left"};
  font-size: ${(props) => props.fontSize || "36px"};
  font-style: ${(props) => props.fontStyle || "normal"};
  font-weight: ${(props) => props.fontWeight || "700"};
  line-height: ${(props) => props.$lineHeight || "42px"};
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
`;

export default Heading;