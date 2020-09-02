import styles from "./ProgressBar.module.css";

interface IPBProps {
  t: number;
}
export const ProgressBar: React.FC<IPBProps> = ({ t }) => (
  <div className={styles.bar}>
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
        className={t === 0 ? styles.pNone : styles.pSlow}
        x1="0"
        x2="100%"
        strokeLinecap="round"
        strokeWidth="4"
        strokeDasharray={`${t * 1.4445}% 200%`}
        stroke="url(#gradient)"
      />
    </svg>
  </div>
);
