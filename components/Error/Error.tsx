import { withCondition } from "../hocs/withCondition";

export const Error = withCondition(({ children }) => (
  <>
    Error...
    <div>{children}</div>
  </>
));
