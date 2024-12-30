import { isValidElement, cloneElement } from "react";

interface ImageRowProps {
  children: React.ReactNode;
}

const ImageRow: React.FC<ImageRowProps> = ({ children }) => {
  const getGridCols = () => {
    if (!Array.isArray(children)) return "grid-cols-1";

    switch (children.length) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      default:
        return "grid-cols-3";
    }
  };

  return (
    <div className={`grid gap-3 py-1 ${getGridCols()}`}>
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
