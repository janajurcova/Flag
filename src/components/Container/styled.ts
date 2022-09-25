import styled from "styled-components";

export const ContainerRoot = styled.div`
  padding: 0 0.9375em;
  margin: 0 auto;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 33.75em;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 45em;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 60em;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 71.25em;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    max-width: 82.5em;
  }
`;
