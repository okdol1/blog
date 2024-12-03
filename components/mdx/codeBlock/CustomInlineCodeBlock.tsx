const CustomInlineCodeBlock = ({
  children,
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <code className="bg-[#121212] text-[#ED4956] text-[85%] rounded-[4px] py-[0.2em] px-[0.4em] leading-normal">
      {children}
    </code>
  );
};

export default CustomInlineCodeBlock;
