import { StyledTitle } from "./styles";
import { TitleProps } from "./types";

export const Title = ({ children, color }: TitleProps) => {
  return (
    <>
      <StyledTitle color={color}> {children}</StyledTitle>
    </>
  );
};
