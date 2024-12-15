const CustomImage = ({
  src = "",
  alt = "",
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) => {
  return (
    <div className="relative my-1 w-full h-full max-w-content">
      <img src={src} alt={alt} />
    </div>
  );
};

export default CustomImage;
