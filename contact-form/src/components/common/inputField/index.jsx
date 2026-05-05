import styled from "styled-components";

const InputField = styled.input`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "48px"};
  padding: ${(props) => props.$padding || "10px 14px"};
  border: 1px solid ${(props) => props.$borderColor || "#ccc"};
  border-radius: ${(props) => props.$radius || "6px"};
  font-size: ${(props) => props.$fontSize || "16px"};
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: ${(props) => props.$focusColor || "#007bff"};
    box-shadow: 0 0 0 2px
      ${(props) => props.$focusShadow || "rgba(0, 123, 255, 0.2)"};
  }

  &::placeholder {
    color: ${(props) => props.$placeholderColor || "#999"};
  }
`;

export default InputField;
