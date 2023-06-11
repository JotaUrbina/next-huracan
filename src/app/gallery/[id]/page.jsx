import React from "react";
import Page404 from "@/app/not-found";
import Gallery from "@/components/Gallery/gallery";

const fetchData = () => {
  return fetch(
    "http://127.0.0.1:3000/dataGallery3sp.json"
  ).then((res) => res.json());
};

const GalleryId = async ({ params }) => {
  const data = await fetchData();
  const { id } = params;

  return (
    <>
      <section>
        {id === "3sp" && <Gallery data={data} />}
      </section>
      <section>
        {id === "88" && (
          <div className="w-screen h-screen flex justify-center items-center text-6xl bg-hnBlack text-hnOrange font-bold">
            Under Construction
          </div>
        )}
      </section>
      {id !== "3sp" && id !== "88" && <Page404 />}
    </>
  );
};

export default GalleryId;
