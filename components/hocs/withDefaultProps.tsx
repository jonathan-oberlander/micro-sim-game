import { ComponentType } from "react";

export const withDefaultProps = <
  P extends object,
  DP extends Partial<P> = Partial<P>
>(
  defaultProps: DP,
  Cmp: ComponentType<P>
) => {
  // extract Props that need to be required
  type RequiredProps = Omit<P, keyof P>;
  // re create out props definition by crating an intersection type
  // between all original props mapped to be optional and required to be required
  type Props = Partial<DP> & Required<RequiredProps>;
  Cmp.defaultProps = defaultProps;

  // overide return type definition by turning eacj ttype checker off
  // for original props and setting the correct return type
  return (Cmp as ComponentType<any>) as ComponentType<Props>;
};
