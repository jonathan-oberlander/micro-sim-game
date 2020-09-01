interface IHOCProps {
  display: boolean;
  children?: any;
}
export const withCondition = <T extends object>(Component: React.FC<T>) => (
  props: T & IHOCProps
) => <>{props.display && <Component {...(props as T)} />}</>;
