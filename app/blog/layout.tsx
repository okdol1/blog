interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return <div className="content pt-20 px-5 pb-5">{children}</div>;
};

export default BlogLayout;
