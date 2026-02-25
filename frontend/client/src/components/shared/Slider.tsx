import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export const Slider = ({ images }: { images: string[] }) => {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const changeSlide = (direction: "left" | "right") => {
    if (direction === "left") {
      setImageIndex(imageIndex === 0 ? images.length - 1 : (prev) => (prev as number) - 1);
    } else {
      setImageIndex(imageIndex === images.length - 1 ? 0 : (prev) => (prev as number) + 1);
    }
  };

  return (
    <div className="w-full h-[350px] flex gap-4">
      {/* 🟢 FULL SCREEN MODAL */}
      {imageIndex !== null && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/95 z-50 flex items-center justify-between">
          <button className="text-white p-8" onClick={() => changeSlide("left")}>
            <ChevronLeft size={50} className="hover:text-gray-400 transition" />
          </button>
          
          <div className="w-full max-w-4xl h-full flex items-center justify-center">
            <img src={images[imageIndex]} alt="" className="max-h-[80%] max-w-full object-contain" />
          </div>
          
          <button className="text-white p-8" onClick={() => changeSlide("right")}>
            <ChevronRight size={50} className="hover:text-gray-400 transition" />
          </button>
          
          <button className="absolute top-8 right-8 text-white" onClick={() => setImageIndex(null)}>
            <X size={40} className="hover:text-gray-400 transition" />
          </button>
        </div>
      )}

      {/* 🟢 NORMAL VIEW */}
      <div className="flex-[3] h-full">
        <img 
          src={images[0]} 
          alt="" 
          className="w-full h-full object-cover rounded-xl cursor-pointer" 
          onClick={() => setImageIndex(0)} 
        />
      </div>
      
      <div className="flex-[1] flex flex-col gap-4 justify-between h-full">
        {images.slice(1, 4).map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt="" 
            className="h-[106px] w-full object-cover rounded-xl cursor-pointer" 
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};