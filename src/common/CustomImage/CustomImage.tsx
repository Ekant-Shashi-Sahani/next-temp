"use client";

import Image, { ImageProps, StaticImageData } from "next/image";
import React from "react";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: StaticImageData;
}

const CustomImage: React.FC<ImageWithFallbackProps> = ({ fallbackSrc, alt, ...rest }) => {
  return (
    <Image
      {...rest}
      alt={alt}
      onError={(event: any) => {
        event.target.src = fallbackSrc?.src || "/upload.png";
      }}
    />
  );
};

export default CustomImage;
