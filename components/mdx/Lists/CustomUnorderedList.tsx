const CustomUnorderedList = (props: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <div className="my-[1px]">
      <ul className="list-disc ml-6 space-y-1.5" {...props} />
    </div>
  );
};

export default CustomUnorderedList;
