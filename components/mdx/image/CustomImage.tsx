const CustomImage = ({
  src = "",
  alt = "",
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) => {
  return (
    <figure className="relative py-1 w-full h-full max-w-content">
      <img src={src} alt={alt} />
      {alt && (
        <figcaption className="py-1.5 pl-0.5 text-sm text-white opacity-40">
          {alt}
        </figcaption>
      )}
    </figure>
  );
};

export default CustomImage;
