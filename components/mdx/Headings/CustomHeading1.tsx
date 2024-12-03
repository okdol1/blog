import { generateId } from "@/utils/markdownUtils";

const CustomHeading1 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  const id = generateId(props.children);

  return (
    <div className="mt-[2em] mb-1">
      <a href={`#${id}`}>
        <h2
          id={id}
          className="text-[1.875em] font-semibold py-[3px]"
          {...props}
        />
      </a>
    </div>
  );
};

export default CustomHeading1;
