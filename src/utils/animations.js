import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const scrollAnimation = (
  container,
  boxes,
  texts
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container, //hacerlo con ref, con la clase no funciona
      start: "top top",
      end: "+=" + 1000 * (boxes.length + 1),
      pin: true,
      scrub: true,
    },
  });

  boxes.forEach((box, i) => {
    if (i === 1) {
      tl.from(box, {
        x: 0,
        ease: "none",
        duration: 0.125,
      });
    } else {
      tl.from(box, {
        xPercent: 100,
        ease: "none",
        duration: 2,
      });
      tl.to(
        boxes[i - 1],
        {
          xPercent: -100,
          ease: "none",
          duration: 2,
        },
        "-=2"
      );
      tl.from(
        texts[i],
        {
          y: 100,
          opacity: 0,
          duration: 0.25,
        },
        "-=.25"
      );
    }
  });
  return () => tl.kill();
};
