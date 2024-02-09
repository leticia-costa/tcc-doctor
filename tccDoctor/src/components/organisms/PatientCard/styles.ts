import styled from "styled-components";
import colors from "../../../constants/colors";

export const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 0.75rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: ${colors.white};
  box-shadow: 0px 0px 15px ${colors.lightGray};
  flex-wrap: wrap;
  gap: 0.5rem;
  .title {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    align-items: baseline;
    border-bottom: 1px solid ${colors.dark};
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    svg {
      font-size: 24px;
      color: ${colors.darkest};
    }
  }
  .infos {
    display: flex;
    gap: 2rem;
  }
  .divisor {
    border-bottom: 1px solid ${colors.lightGray};
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
export const Label = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.purple};
`;
export const Description = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${colors.black};
`;
