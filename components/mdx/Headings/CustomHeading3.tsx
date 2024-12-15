const CustomHeading3 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <div className="pt-[1em] pb-[1px]">
      <h4 className="text-[1.25em] font-semibold py-[2px]" {...props} />
    </div>
  );
};

export default CustomHeading3;
