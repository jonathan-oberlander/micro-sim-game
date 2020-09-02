interface IHOCProps {
  display: boolean;
}
export const withCondition = <T extends object>(
  Cmp: React.ComponentType<T>
) => (props: T & IHOCProps) => (
  <>{props.display && <Cmp {...(props as T)} />}</>
);
