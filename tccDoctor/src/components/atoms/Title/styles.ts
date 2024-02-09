import styled from "styled-components";

export const StyledTitle = styled.h3<{color?: string}>`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 27px;
  color: ${(props) => (props.color ? props.color : '#1c1e2a')};
`;
