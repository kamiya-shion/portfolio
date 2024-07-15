import styles from "./profile.module.css";
import Image from "next/image";
import localImage from "@/public/icon.png";

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <Image
        className={styles.iconImage}
        src={localImage}
        width={150}
        height={150}
        alt="profile picture"
      />
      <h1 className="my-5">プロフィール</h1>
      <p>ほげほげほげ</p>
    </div>
  );
};
