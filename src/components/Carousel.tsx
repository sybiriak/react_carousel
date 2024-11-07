import React, { useState } from 'react';
import './Carousel.scss';

type Props = {
  images: string[];
  itemWidth?: number;
  frameSize?: number;
  step?: number;
  animationDuration?: number;
  infinite?: boolean;
};

const Carousel: React.FC<Props> = ({
  images,
  itemWidth = 130,
  frameSize = 3,
  step = 3,
  animationDuration = 1000,
  infinite = false,
}) => {
  const [curPosition, setCurPosition] = useState<number>(0);

  const maxPosition = (itemWidth * images.length - itemWidth * frameSize) * -1;
  const stepPosition = itemWidth * step;

  const goNext = () => {
    if (curPosition <= maxPosition) {
      if (infinite) {
        setCurPosition(0);
      }

      return;
    }

    const newPosition = Math.abs(maxPosition - curPosition);

    setCurPosition(
      cur => cur - (newPosition > stepPosition ? stepPosition : newPosition),
    );
  };

  const goPrev = () => {
    if (curPosition === 0) {
      if (infinite) {
        setCurPosition(maxPosition);
      }

      return;
    }

    setCurPosition(cur => {
      const newPosition = cur + stepPosition;

      return newPosition < 0 ? newPosition : 0;
    });
  };

  return (
    <div className="Carousel">
      <button
        type="button"
        onClick={goPrev}
        disabled={curPosition === 0 && !infinite}
        data-cy="prev"
      >
        {'<'}
      </button>

      <div
        className="Carousel__container"
        style={{ width: `${frameSize * itemWidth}px` }}
      >
        <ul
          className="Carousel__list"
          style={{
            width: `${itemWidth * images.length}px`,
            transform: `translateX(${curPosition}px)`,
            transitionDuration: `${animationDuration}ms`,
          }}
        >
          {images.map((url, index) => (
            <li key={url}>
              <img src={url} alt={`${index + 1}`} width={itemWidth} />
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={goNext}
        disabled={curPosition <= maxPosition && !infinite}
        data-cy="next"
      >
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
