import styled from "styled-components";
import colors from "../../../constants/colors";

export const DashboardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
  padding: 1rem 3rem;

  .cards {
    display: flex;
    gap: 2rem;
  }
  .cards-column {
    display: flex;
    flex-direction: column;
  }
`;

export const TitleStyled = styled.h1`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: ${colors.purple};
`;

export const DashboardTable = styled.div`
  padding-top: 1rem;
  margin: 0 auto;
  min-width: 100%;
  max-width: 200px;
  margin: 1rem;
  overflow-x: auto;
`;
