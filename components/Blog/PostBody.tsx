import { MDXRemote } from "next-mdx-remote/rsc";
import { markdownComponents } from "@/components/mdx";

interface PostBodyProps {
  content: string;
}

const PostBody: React.FC<PostBodyProps> = ({ content }) => {
  return (
    <div className="relative bg-black text-[16px] leading-normal flex flex-col items-start">
      <MDXRemote source={content} components={markdownComponents} />
    </div>
  );
};

export default PostBody;
