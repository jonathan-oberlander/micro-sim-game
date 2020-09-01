import { withCondition } from "../withCondition/withCondition";

interface IPBProps {
  t: number;
}
export const ProgressBar: React.FC<IPBProps> = withCondition(({ t }) => (
  <svg>
    <line
      x1="0"
      y1="0"
      x2={`${t * 3.3}`}
      y2="0"
      style={{
        stroke: "rgb(120,20,0)",
        strokeWidth: 3,
      }}
    />
  </svg>
));
