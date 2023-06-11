import React from "react";
import "./heroButton.scss";
import Link from "next/link";

const HeroButton = ({ txt, link }) => {
  return (
    <Link href={link} className="w-28 h-12">
      <div className="ui-btn w-full h-full bg-hnOrange text-2xl text-white font-light">
        <span className="z-50 flex justify-center items-center">
          {txt}
        </span>
      </div>
    </Link>
  );
};

export default HeroButton;
