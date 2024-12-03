const CustomBlockquote = (props: React.HTMLAttributes<HTMLQuoteElement>) => {
  return (
    <div className="my-1 py-[3px]">
      <blockquote className="px-4 border-l-[3px]" {...props} />
    </div>
  );
};

export default CustomBlockquote;
