import Image from "next/image";
import { MotionDiv } from "./motion-div";

export const Hero = () => {
  const variants = {
    hidden: {
      opacity: 0,
      x: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <section className="w-full h-48 md:h-96 flex items-center px-4 xl:px-0">
      <div className="w-full h-full flex justify-center items-center relative">
        <Image
          src="/heroBanner.png"
          alt="Hero Banner"
          height={100}
          width={1000}
          className="object-cover"
        />

        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={variants}
          className="absolute top-12 md:top-28"
        >
          <Image
            src="/heroAirpods.png"
            alt="Hero Banner"
            height={100}
            width={640}
            className="object-cover drop-shadow-2xl"
          />
        </MotionDiv>
      </div>
    </section>
  );
};
