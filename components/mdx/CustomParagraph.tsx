const CustomParagraph = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <div className="my-[1px]">
      <p className="py-[3px]" {...props} />
    </div>
  );
};

export default CustomParagraph;
