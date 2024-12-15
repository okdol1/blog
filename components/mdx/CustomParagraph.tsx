const CustomParagraph = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <div className="py-[1px]">
      <p className="py-[3px]" {...props} />
    </div>
  );
};

export default CustomParagraph;
