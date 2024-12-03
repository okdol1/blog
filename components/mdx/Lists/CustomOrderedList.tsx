const CustomOrderedList = (props: React.HTMLAttributes<HTMLOListElement>) => {
  return (
    <div className="my-[1px]">
      <ol className="list-decimal ml-6 space-y-1.5" {...props} />
    </div>
  );
};

export default CustomOrderedList;
