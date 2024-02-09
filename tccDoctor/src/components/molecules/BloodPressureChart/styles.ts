import styled from "styled-components";
import colors from "../../../constants/colors";

export const ChartCard = styled.div`
  width:70%;
  display: flex;
  flex-direction: column;
  margin-top: .75rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: ${colors.white};
  box-shadow: 0px 0px 15px ${colors.lightGray};
  flex-wrap: wrap;
  gap: 0.5rem;

`;