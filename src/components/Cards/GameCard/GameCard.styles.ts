import styled from "styled-components";

export const StyledGameCard = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => props.color};
  opacity: ${({ theme }) => (theme.hidden ? 0 : 1)};
  transform: ${({ theme }) =>
    theme.active ? "rotate3d(0, 1, 0, 180deg)" : "rotate3d(0, 1, 0, 0)"};
  transition: transform 0.5s linear, background 0s;
  transition-delay: 0s, 0.25s;
  border-radius: 10px;
  cursor: pointer;
`;
