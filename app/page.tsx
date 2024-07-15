import { FixedFooter } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Profile } from "./components/profile/profile";
import Image from "next/image";
import localImage from "@/public/icon.png";
import { Skill } from "./components/skill/skill";

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
      <main className="max-w-[1200px] py-10 flex flex-col gap-6 items-center">
        <Profile />
        <Skill />
      </main>
      <FixedFooter />
    </>
  );
}
