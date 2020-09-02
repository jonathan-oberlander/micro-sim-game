import { withCondition } from "../hocs/withCondition";

export const Loader = withCondition(() => <div>Loading...</div>);
