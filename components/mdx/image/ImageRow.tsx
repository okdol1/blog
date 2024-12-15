import { isValidElement, cloneElement } from "react";

interface ImageRowProps {
  children: React.ReactNode;
}

const ImageRow: React.FC<ImageRowProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-3 gap-3 py-1">
      {Array.isArray(children) &&
        children.map((child, index) => (
          <div key={index} className="aspect-[3/4]">
            {isValidElement<React.ImgHTMLAttributes<HTMLImageElement>>(child) &&
              cloneElement(child, {
                className: "w-full h-full object-cover",
              })}
          </div>
        ))}
    </div>
  );
};

export default ImageRow;
