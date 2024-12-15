const CustomBlockquote = (props: React.HTMLAttributes<HTMLQuoteElement>) => {
  return (
    <div className="py-[7px]">
      <blockquote className="px-4 border-l-[3px]" {...props} />
    </div>
  );
};

export default CustomBlockquote;
