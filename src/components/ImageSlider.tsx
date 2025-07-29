import { useEffect, useState } from "react";

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade out
      setFade(false);

      // Wait for fade-out transition before changing image
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Fade in the new image
      }, 500); // match your fade-out transition duration
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex && fade ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
