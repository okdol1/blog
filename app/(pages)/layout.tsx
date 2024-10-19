interface PagesLayoutProps {
  children: React.ReactNode;
}

const PagesLayout = ({ children }: PagesLayoutProps) => {
  return <div className="mt-16 px-5 pb-10">{children}</div>;
};

export default PagesLayout;
