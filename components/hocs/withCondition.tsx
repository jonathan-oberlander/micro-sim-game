interface IDC {
  display: boolean;
}
export const withDisplayCondition = <T extends object>(
  Component: React.FC<T>
) => ({ display, ...props }: T & IDC) => (
  <>{display && <Component {...(props as T & IDC)} />}</>
);
