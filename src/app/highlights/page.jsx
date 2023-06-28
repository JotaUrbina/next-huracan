import Image from "next/image";
import React from "react";
import Highlights from "@/components/Highlights/Highlights";

const fetchData = async () => {
  return await fetch(
    "http://127.0.0.1:3000/dataHighlights.json"
  ).then((res) => res.json());
};

const HighlightsPage = async () => {
  const data = await fetchData();
  console.log(data);

  return <Highlights data={data} />;
};

export default HighlightsPage;
