import { FixedFooter } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Profile } from "./components/profile/profile";
import Image from "next/image";
import localImage from "@/public/icon.png";

export default function Home() {
  return (
    <>
      <Header />
      <Image
        className="rounded-full mx-auto mt-8"
        src={localImage}
        width={150}
        height={150}
        alt="profile picture"
      />
      <main>
        <Profile />
      </main>
      <FixedFooter />
    </>
  );
}
