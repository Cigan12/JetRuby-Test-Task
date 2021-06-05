import styled from "styled-components";

export const GameContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-template-rows: repeat(4, max-content);
  gap: 16px;
`;
