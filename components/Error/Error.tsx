import { withDisplayCondition } from "../hocs/withCondition";

interface IProps {
  cool: true;
  children: React.ReactNode;
}
export const Error: React.FC<IProps> = ({ children, cool }) => (
  <>
    Error...
    <p>{children}</p>
  </>
);

export const ConditionalError = withDisplayCondition(Error);
