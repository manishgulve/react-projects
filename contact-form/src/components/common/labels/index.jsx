import styled from "styled-components";

const Label = styled.label`
  display: block;
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "700"};
  color: ${(props) => props.color || "#141414"};
  margin-bottom: ${(props) => props.marginBottom || "6px"};
  text-align: ${(props) => props.$textAlign || "left"};
`;

export default Label;
