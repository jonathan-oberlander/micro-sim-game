import styles from "./ProgressBar.module.css";

interface IPBProps {
  t: number;
}
export const ProgressBar: React.FC<IPBProps> = ({ t }) => (
  <div className={styles.bar}>
    <svg width="400px" height="4px">
      <path
        d={`M0,0 H400,0`}
        strokeDasharray={`${t * 4.44445} 800`}
        style={{ transition: "all 150ms" }}
      />
    </svg>
  </div>
);
