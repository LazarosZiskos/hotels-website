"use client";

import Image from "next/image";
import React, { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

const ImagePreview = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage>(images[0]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="w-full flex justify-center items-center">
        <div className="relative w-full aspect-[4/3] max-w-6xl mx-auto">
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            fill
            className="object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex mt-2 gap-4 justify-center overflow-x-auto">
        {images.map((img, i) => (
          <div
            key={i}
            className={`relative w-24 h-16 cursor-pointer border-2 rounded-md transition-all duration-300 ${
              selectedImage.src === img.src
                ? "border-amber-500"
                : "border-transparent"
            }`}
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagePreview;
