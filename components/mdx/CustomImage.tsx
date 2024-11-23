const CustomImage = ({
  src = "",
  alt = "",
  ...props
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) => {
  return <img src={src} alt={alt} {...props} />;
};

export default CustomImage;
