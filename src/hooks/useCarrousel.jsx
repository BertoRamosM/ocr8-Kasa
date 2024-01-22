import { useState } from "react";

const useCarousel = (lenghtOfItems) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % lenghtOfItems);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + lenghtOfItems) % lenghtOfItems
    );
  };

  return { currentIndex, goToNext, goToPrevious };
};

export default useCarousel;
