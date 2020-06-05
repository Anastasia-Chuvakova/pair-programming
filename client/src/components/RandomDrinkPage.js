import React from "react";

function VideoList({ randomDrinkArray}) {
  return (





{videoListArray
    .filter((video) => video.id !== mainId)
    .map((video) => (
      <div className="video-list__block">
        <div className="video-list__image">