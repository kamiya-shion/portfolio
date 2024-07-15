import styles from "./profile.module.css";

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <section>
        <h1 className="font-bold my-5">Profile</h1>
        <div>
          <p>
            1999年生まれ。
            <br />
            出身は福岡で現在は東京在住。
            <br />
            2022年にCIerに新卒入社。
            <br />
            業務ではフロントエンド中心だがバックエンドも書く。
          </p>
        </div>
      </section>
    </div>
  );
};
