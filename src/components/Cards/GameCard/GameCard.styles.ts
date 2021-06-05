import styled from "styled-components";

export const StyledGameCard = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => props.color};
  border-radius: 10px;
  cursor: pointer;
`;
