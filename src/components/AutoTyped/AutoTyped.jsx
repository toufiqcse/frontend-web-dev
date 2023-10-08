import React from "react";
import { TypeAnimation } from "react-type-animation";


const AutoTyped = () => {
  return (

    <TypeAnimation
      sequence={[

        "I'm Frontend Web Developer",
        1000,
        "I'm Frontend Web Designer",
        1000,
        "I'm Digital Marketer",
        1000,

      ]}
      speed={30}
      deletionSpeed={50}

      repeat={Infinity}
      className="md:text-3xl text-[19px] text-center md:text-left"
    />

  );
};

export default AutoTyped;