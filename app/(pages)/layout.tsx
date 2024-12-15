interface PagesLayoutProps {
  children: React.ReactNode;
}

const PagesLayout = ({ children }: PagesLayoutProps) => {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-content px-5 w-full ">{children}</div>
    </main>
  );
};

export default PagesLayout;
