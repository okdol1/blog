const CustomHeading2 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <div className="mt-[1.4em] mb-[1px]">
      <h3 className="text-[1.5em] font-semibold py-[3px]" {...props} />
    </div>
  );
};

export default CustomHeading2;
