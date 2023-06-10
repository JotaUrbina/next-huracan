import React from "react";

const GalleryId = ({ params }) => {
  const { id } = params;
  return <div>Galería de {id}</div>;
};

export default GalleryId;
