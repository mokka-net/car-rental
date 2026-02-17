import Image from "next/image";
import CustomButton from "./CustomButton";

export default function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-7xl mx-auto flex justify-between items-center padding-x py-5">
        <Image
          src="/logo.svg"
          alt="CarHub Logo"
          width={118}
          height={18}
          priority
        />

        <CustomButton
          title="Sign In"
          containerStyles="bg-primary-blue hover:bg-primary-blue/90"
        />
      </nav>
    </header>
  );
}