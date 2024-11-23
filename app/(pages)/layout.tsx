interface PagesLayoutProps {
  children: React.ReactNode;
}

const PagesLayout = ({ children }: PagesLayoutProps) => {
  return <main className="px-5 pb-5">{children}</main>;
};

export default PagesLayout;
