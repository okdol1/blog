import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { markdownComponents } from "@/components/mdx";

const getPost = (slug: string) => {
  const postsDirectory = path.join(process.cwd(), "content");
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return { data, content };
};

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { data, content } = getPost(params.slug);

  return (
    <article>
      <header className="pt-16 pb-20">
        <h1 className="text-[40px] font-bold">{data.title}</h1>
        <time className="text-xs">{data.date}</time>
      </header>

      <div className="w-full grid place-content-center">
        <div className="content max-w-[1080px] space-y-10">
          <MDXRemote source={content} components={markdownComponents} />
        </div>
      </div>
    </article>
  );
}
