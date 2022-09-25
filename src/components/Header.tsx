import type { FC } from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
`;

const StyledButton = styled.button`
background-color: pink;
`;

type HeaderProps = {
    title: string;
    theme: string;
};

export const Header: FC<HeaderProps> = ({ title, theme }) => (
    <StyledHeader>
    <a>{title}</a>
    <StyledButton>{theme}</StyledButton>
    </StyledHeader>
)