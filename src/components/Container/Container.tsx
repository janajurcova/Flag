import type { FC, ReactNode } from "react";

import { ContainerRoot } from "./styled";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container: FC<ContainerProps> = ({ children, className }) => (
  <ContainerRoot className={className}>
    {children}
  </ContainerRoot>
);

Container.defaultProps = {
  className: "",
};

export { Container };
