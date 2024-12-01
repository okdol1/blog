interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <h1 className="font-bold border-b border-gray-800 py-5 mb-10 text-[32px] uppercase">
      {title}
    </h1>
  );
};

export default PageTitle;
