const CustomImage = ({
  src = "",
  alt = "",
  ...props
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) => {
  // TODO: 이미지 컴포넌트 전략 생각해보기
  return <img src={src} alt={alt} className="max-w-full w-full" {...props} />;
};

export default CustomImage;
