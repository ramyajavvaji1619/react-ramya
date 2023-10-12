import React, { useState } from 'react';
import './index.css';
import ThumbnailsList from '../ThumbnailsList';

const photosData = [
  {
    id: 0,
    imageUrl:
      'https://www.iwmbuzz.com/wp-content/uploads/2020/02/virat-kohli-the-superstar-fashion-icon.jpg',
    thumbnailUrl:
      'https://www.iwmbuzz.com/wp-content/uploads/2020/02/virat-kohli-the-superstar-fashion-icon.jpg',
    imageAltText: 'KING KOHLI',
    thumbnailAltText: 'Virat Kohli thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://i.pinimg.com/1200x/45/34/68/4534681f18504a75b5b25c636bb94c34.jpg',
    thumbnailUrl:
      'https://i.pinimg.com/1200x/45/34/68/4534681f18504a75b5b25c636bb94c34.jpg',
    imageAltText:'KING KOHLI',
    thumbnailAltText:'Virat Kohli thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://img.mensxp.com/media/content/2018/Oct/virat-kohli-shares-styling-tips-for-white-sneakers1-1540299455.jpg',
    thumbnailUrl:
      'https://img.mensxp.com/media/content/2018/Oct/virat-kohli-shares-styling-tips-for-white-sneakers1-1540299455.jpg',
    imageAltText: 'KING KOHLI',
    thumbnailAltText: 'Virat Kohli thumbnail',
  },
  {
    id: 3,
    imageUrl:
      'https://img.mensxp.com/media/content/2018/Oct/virat-kohli-shares-styling-tips-for-white-sneakers1400-1540299404.jpg',
    thumbnailUrl:
      'https://img.mensxp.com/media/content/2018/Oct/virat-kohli-shares-styling-tips-for-white-sneakers1400-1540299404.jpg',
    imageAltText: 'KING KOHLI',
    thumbnailAltText: 'Virat Kohli thumbnail',
  },
  {
    id: 4,
    imageUrl: 'https://i.pinimg.com/736x/bd/15/0e/bd150e541c00b021861e8011e11b620a.jpg',
    thumbnailUrl:
      'https://i.pinimg.com/736x/bd/15/0e/bd150e541c00b021861e8011e11b620a.jpg',
    imageAltText: 'KING KOHLI',
    thumbnailAltText:'Virat Kohli thumbnail',
  },
  {
    id: 5,
    imageUrl: 'https://i.pinimg.com/474x/65/0f/b3/650fb37d1fdbea6912de2abc88a5ad6b.jpg',
    thumbnailUrl:
      'https://i.pinimg.com/474x/65/0f/b3/650fb37d1fdbea6912de2abc88a5ad6b.jpg',
    imageAltText:'KING KOHLI',
    thumbnailAltText: 'Virat Kohli thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://www.mygoodtimes.in/wp-content/uploads/2019/11/virat.jpg',
    thumbnailUrl:
      'https://www.mygoodtimes.in/wp-content/uploads/2019/11/virat.jpg',
    imageAltText:'KING KOHLI',
    thumbnailAltText: 'Virat Kohli thumbnail',
  },
  {
    id: 7,
    imageUrl: 'https://www.thestatesman.com/wp-content/uploads/2017/09/Virat-Kohli-Practice.jpg',
    thumbnailUrl:
      'https://www.thestatesman.com/wp-content/uploads/2017/09/Virat-Kohli-Practice.jpg',
    imageAltText: 'KING KOHLI',
    thumbnailAltText: 'Virat Kohli thumbnail',
  },
];

function Gallery() {
  const [selectedImageId, setSelectedImageId] = useState(0);

  const updateSelectedImageId = (id) => {
    setSelectedImageId(id);
  };

  const renderSelectedImage = () => {
    const { imageUrl, imageAltText } = photosData[selectedImageId];
    return <img src={imageUrl} className="image" alt={imageAltText} />;
  };

  return (
    <div className="app-container5">
      <div className="container5">
        {renderSelectedImage()}
        <ThumbnailsList
          photosData={photosData}
          selectedImageId={selectedImageId}
          onClickUpdateId={updateSelectedImageId}
        />
      </div>
    </div>
  );
}

export default Gallery;
