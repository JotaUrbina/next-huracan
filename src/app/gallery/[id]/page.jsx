import React from "react";
import Page404 from "@/app/not-found";
import Gallery from "@/components/Gallery/gallery";

const fetchData = async () => {
  return await fetch(
    "http://127.0.0.1:3000/gallery.json"
  ).then((res) => res.json());
};

const GalleryId = async ({ params }) => {
  const data = await fetchData();
  const { id } = params;

  return (
    <>
      <section>
        {id === "3sp" && <Gallery data={data.hn3sp} />}
      </section>
      <section>
        {id === "88" && <Gallery data={data.hn88} />}
      </section>
      {id !== "3sp" && id !== "88" && <Page404 />}
    </>
  );
};

export default GalleryId;
