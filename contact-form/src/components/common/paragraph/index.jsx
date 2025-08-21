import styled from "styled-components";

const Paragraph = styled.p`
  color: ${(props) => props.color || "#141414"};
  text-align: ${(props) => props.$textAlign || "left"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-style: ${(props) => props.fontStyle || "normal"};
  font-weight: ${(props) => props.fontWeight || "400"};
  line-height: ${(props) => props.$lineHeight || "24px"};
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
`;

export default Paragraph;