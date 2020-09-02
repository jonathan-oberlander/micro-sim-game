import styles from "./ProgressBar.module.css";
const { pNone, pSlow, bar } = styles;

interface IPBProps {
  t: number;
}
export const ProgressBar: React.FC<IPBProps> = ({ t }) => (
  <div className={bar}>
    <svg>
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          x2="60%"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(1)"
        >
          <stop stopColor="grey" offset="5%" />
          <stop stopColor="black" offset="95%" />
        </linearGradient>
      </defs>
      <line
        className={t === 0 ? pNone : pSlow}
        x1="0"
        x2="100%"
        strokeLinecap="round"
        strokeWidth="4"
        strokeDasharray={`${t * 1.566}% 200%`}
        stroke="url(#gradient)"
      />
    </svg>
  </div>
);
