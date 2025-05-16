import { useState } from 'react';

const Carousel = ({ images, caption }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div className="p-4 text-center text-gray-500">No images to display</div>;
  }

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  console.log(caption[currentIndex]);

  return (
    <div className="relative w-full md:w-[70%] mb-[75px] mt-[50px] mx-auto ">
      <div className="relative w-full overflow-hidden rounded-lg">
        <div className="flex flex-col justify-between w-full h-full">
          <img 
            src={images[currentIndex].url || images[currentIndex]}
            alt={images[currentIndex].alt || `Project image ${currentIndex + 1}`}
            className="object-contain max-w-full max-h-full carousel_img"
          />
           {caption && (
          <div className='text-red-500'>
            {caption[currentIndex]}
          </div>
        )}
        </div>
      </div>
      <div className='absolute flex items-center justify-between w-full -translate-y-1/2 top-1/2'>
            <button className='w-[2.5em] h-[2.5em] rounded-full' onClick={goToPrevious}>&lt; </button>
            <button className='w-[2.5em] h-[2.5em] rounded-full' onClick={goToNext}>&gt;</button>
        </div>

      <div className="absolute px-2 py-1 text-xs text-white bg-black bg-opacity-50 rounded-md bottom-2 right-2">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Carousel;