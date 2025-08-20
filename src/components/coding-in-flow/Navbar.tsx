import logo from "../../assets/cif_logo_text.png";
import { ModeToggle } from "./mode-toggle";


export function Navbar() {
  return (
    <nav className="">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        <img
          src={logo}
          alt="Coding in Flow logo"
          width={180}
          className="dark:brightness-0 dark:invert"

        />

        <ModeToggle />
      </div>
    </nav>
  );
}