import Image from "next/image";
import React from "react";

const Highlights = ({ data }) => {
  return (
    <main className="flex w-screen h-screen flex-nowrap">
      {data.map((ele) => (
        <section
          className="min-w-fit min-h-fit bg-hnGray grid grid-cols-[1fr_2fr_3fr] grid-rows-[3fr_1.3fr]"
          key={ele.id}
        >
          <div className="w-fit h-fit rotate-90 translate-y-20 font-semibold leading-4 justify-self-end">
            <p>DE LA PISTA A LA</p>
            <p>CALLE</p>
          </div>
          <div className="w-full h-full relative">
            <Image
              src={ele.img}
              alt="rueda"
              fill={true}
              style={{
                objectFit: "contain",
                objectPosition: "bottom",
                position: "absolute",
              }}
            />
          </div>
          <article className="w-full h-full flex flex-col items-end justify-center gap-1 px-12 relative">
            <Image
              src={ele.logo}
              width={400}
              height={400}
              alt="logo"
            />

            <p className="font-light tracking-normal text-3xl text-hnBlack text-right">
              {ele.title}{" "}
            </p>
            <p className="text-right font-light leading-5 tracking-normal text-base text-hnBlack">
              {ele.description}
            </p>
            <div className="absolute bottom-4 flex gap-2">
              <p className="font-semibold text-xl">
                {"$" + ele.price.toLocaleString("es-ES")}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
          </article>
          <div className="pr-5 flex">
            <span className="h-5 w-full bg-hnOrange" />
          </div>
          <div className="w-full h-full flex flex-col">
            <span className="h-5 w-5 bg-hnOrange col-start-2 row-start-2" />
            <p className="specTitle mt-4">{ele.model}</p>
            <p className="specTxt">{ele.spec_one}</p>
            <p className="specTxt">{ele.spec_two} </p>
            <p className="specTxt">{ele.spec_three}</p>
            <p className="specTxt">{ele.spec_four}</p>
          </div>
          <span className="h-5 w-full bg-hnOrange justify-self-end" />
        </section>
      ))}
    </main>
  );
};

export default Highlights;
