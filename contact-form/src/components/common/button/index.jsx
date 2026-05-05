// Button.jsx
import styled, { css } from "styled-components";

const Button = styled.button`
  padding: ${(props) =>
    props.size === "large"
      ? "12px 24px"
      : props.size === "small"
      ? "6px 12px"
      : "10px 20px"};
  border-radius: 6px;
  font-size: ${(props) =>
    props.size === "large" ? "16px" : props.size === "small" ? "12px" : "14px"};
  font-weight: 600;
  cursor: pointer;
  border: none;
  margin: ${(props) => props.$margin || "0"};
  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.$variant === "outline"
      ? css`
          background: transparent;
          border: 2px solid #007bff;
          color: #007bff;

          &:hover {
            background: #007bff;
            color: #fff;
          }
        `
      : props.$variant === "secondary"
      ? css`
          background: #6c757d;
          color: #fff;

          &:hover {
            background: #5a6268;
          }
        `
      : css`
          background: #007bff;
          color: #fff;

          &:hover {
            background: #0056b3;
          }
        `}
`;

export default Button;
