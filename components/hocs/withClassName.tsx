import React from "react";
interface IWCN {
  className: string;
}
export const withClassName = <T extends React.ComponentType<Partial<IWCN>>>(
  Component: T
): React.FC<Omit<React.ComponentProps<T>, keyof IWCN>> => {
  return (props) =>
    React.createElement(Component, { className: "foo", ...props });
};
