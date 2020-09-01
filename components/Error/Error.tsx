import { withCondition } from "../withCondition/withCondition";

export const Error = withCondition(({ children }) => (
  <>
    Error...
    <div>{children}</div>
  </>
));
