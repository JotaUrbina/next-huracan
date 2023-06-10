import React from "react";

const fetchData = () => {
  return fetch(
    "http://127.0.0.1:3000/dataGallery3sp.json"
  ).then((res) => res.json());
};
const Gallery = async () => {
  const data = await fetchData();
  return (
    <section>
      {data.map((ele) => (
        <h2>{ele.text}</h2>
      ))}
    </section>
  );
};

export default Gallery;
