import { FixedFooter } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Profile } from "./components/profile/profile";
import ExportedImage from "next-image-export-optimizer";
import localImage from "@/public/icon.png";
import { Skills } from "./components/skills/skills";
import { Works } from "./components/works/works";

export default function Home() {
  return (
    <>
      <Header />
      <ExportedImage
        className="rounded-full mx-auto mt-8"
        src={localImage}
        width={150}
        height={150}
        alt="profile picture"
      />
      <main className="max-w-[1200px] py-10 flex flex-col gap-6 items-center">
        <Profile />
        <Skills />
        <Works />
      </main>
      <FixedFooter />
    </>
  );
}
