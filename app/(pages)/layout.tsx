interface PagesLayoutProps {
  children: React.ReactNode;
}

const PagesLayout = ({ children }: PagesLayoutProps) => {
  return (
    <main className="grid justify-center">
      <div className="max-w-content mx-5">{children}</div>
    </main>
  );
};

export default PagesLayout;
