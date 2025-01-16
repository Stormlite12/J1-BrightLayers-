import { useRef, useEffect, useLayoutEffect, useState } from "react";
import Card from "./Card.jsx";
import cardData from "./CardData.jsx";

const InfiniteCarousel = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const hoverThreshold = 40;

  useLayoutEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.offsetWidth;
      setCardWidth(width);

      const container = containerRef.current;
      if (container) {
        container.scrollLeft = 0;
      }
    }
  }, []);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container || !cardWidth) return;

    const { left, right } = container.getBoundingClientRect();
    const mouseX = e.clientX;

    if (mouseX < left + hoverThreshold) {
      container.scrollLeft -= cardWidth;
    }

    if (mouseX > right - hoverThreshold) {
      container.scrollLeft += cardWidth;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [cardWidth]);

  return (
    <div
      className="flex max-w-[90%] md:max-w-[80%] mx-auto justify-start mt-[4rem] md:mt-[6rem] lg:mt-[9rem] mb-[10rem] overflow-x-auto scroll-smooth no-scrollbar"
      ref={containerRef}
    >
      {/* Add extra padding div at the beginning */}
      <div style={{ width: cardWidth / 2 }}></div>

      <div className="flex gap-x-10 gap-y-4 py-4 flex-nowrap items-center">
        {cardData.map((card, index) => (
          <Card
            ref={index === 0 ? cardRef : null}
            key={card.id}
            title={card.title}
            content={card.content}
            name={card.name}
          />
        ))}
      </div>

      {/* Add extra padding div at the end */}
      <div style={{ width: cardWidth / 2 }}></div>
    </div>
  );
};

export default InfiniteCarousel;