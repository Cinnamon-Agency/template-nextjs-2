import { ReactNode } from "react";

export interface BaseComponentProps {
  children?: ReactNode;
  className?: string;
}

export interface PropsWithClassName {
  className?: string;
}
