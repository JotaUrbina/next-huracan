"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { scrollAnimation } from "@/utils/animations";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Gallery = ({ data }) => {
  const refContainer = useRef(null);
  const refBoxes = useRef([]);
  const refTexts = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      scrollAnimation(
        refContainer.current,
        refBoxes.current,
        refTexts.current
      );
    }, refContainer);
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-screem h-screen relative"
      ref={refContainer}
    >
      {data.map((ele) => (
        <div
          className="box w-screen h-screen absolute"
          key={ele.id}
          ref={(el) => (refBoxes.current[ele.id] = el)}
        >
          <Image
            src={ele.url}
            alt="3sp"
            fill={true}
            className="box-img object-cover"
          />
          {ele.text && (
            <h2
              className="text absolute bottom-5 right-5"
              ref={(el) => (refTexts.current[ele.id] = el)}
            >
              {ele.text}
            </h2>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
