interface PagesLayoutProps {
  children: React.ReactNode;
}

const PagesLayout = ({ children }: PagesLayoutProps) => {
  return <main className="mt-16 px-5 pb-10">{children}</main>;
};

export default PagesLayout;
