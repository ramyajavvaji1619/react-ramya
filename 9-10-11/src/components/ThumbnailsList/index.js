import React, { useState } from 'react';
import './index.css';

function ThumbnailsList({ photosData, onClickUpdateId, selectedImageId }) {
  const renderThumbnails = () => {
    return photosData.map(eachItem => {
      const { thumbnailUrl, id, thumbnailAltText } = eachItem;

      const onClickThumbnail = () => {
        onClickUpdateId(id);
      };

      const buttonName = id === selectedImageId ? 'selected-list-item' : 'list-item';

      return (
        <li key={id} className={buttonName} onClick={onClickThumbnail}>
          <img src={thumbnailUrl} className="thumbnail-image" alt={thumbnailAltText} />
        </li>
      );
    });
  };

  return (
    <div className="thumbnail-container">
      <h1 className="heading">Kohli Photography</h1>
      <p className="description">Kohli Photography by Ramya</p>
      <ul className="thumbnails-list-container">{renderThumbnails()}</ul>
    </div>
  );
}

export default ThumbnailsList;
