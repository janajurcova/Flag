import type { FC } from "react";
import { StyledButton, StyledHeader, StyledTitle } from './styled';

type HeaderProps = {
  title: string;
  theme: string;
};

export const Header: FC<HeaderProps> = ({ title, theme }) => (
  <StyledHeader>
    <StyledTitle>{title}</StyledTitle>
    <StyledButton>{theme}</StyledButton>
  </StyledHeader>
);
