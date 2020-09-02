import { withDisplayCondition } from "../hocs/withCondition";

const Loader: React.FC = () => <div>Loading...</div>;

export const ConditionalLoader = withDisplayCondition(Loader);
