import styled from "styled-components";

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  resize: vertical;
  min-height: 100px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export default TextArea;
