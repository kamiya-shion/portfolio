import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <p>Shion</p>
      </div>
    </header>
  );
};
