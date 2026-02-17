import Image from "next/image";
import CustomButton from "./CustomButton";

export default function Hero() {
  return (
    <section className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-7xl mx-auto min-h-screen">

      {/* LEFT SIDE */}
      <div className="flex-1 flex flex-col justify-center padding-x pt-36 xl:pt-0">
        <h1 className="text-[50px] font-extrabold text-black-100 leading-tight">
          Find, book, or rent a car — quickly and easily!
        </h1>

        <p className="mt-5 text-[18px] text-grey">
          Streamline your car rental experience with our effortless booking process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue mt-10 hover:bg-primary-blue/90"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="xl:flex-[1.5] flex justify-end items-center w-full xl:h-screen">

        <div className="relative w-full h-[400px] xl:h-[700px]">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            priority
            className="object-contain"
          />
        </div>

      </div>

    </section>
  );
}