import styled from "styled-components";

const Container = styled.div`
  max-width: ${(props) => props.$maxWidth || "1200px"};
  margin: 0 auto;
  padding: ${(props) => props.$padding || "0 16px"};
  width: 100%;
`;

export default Container;