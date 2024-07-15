import clsx from "clsx";
import styles from "./footer.module.css";

export const FixedFooter = () => {
  return (
    <footer className={clsx("text-xs text-gray-400 bg-white", styles.footer)}>
      © 2024 Shion.
    </footer>
  );
};
