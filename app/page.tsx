import { FixedFooter } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Profile } from "./components/profile/profile";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Profile />
      </main>
      <FixedFooter />
    </>
  );
}
