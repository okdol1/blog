import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

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
      <header className="text-center pt-16 pb-20">
        <time className="text-xs">{data.date}</time>
        <h1 className="text-5xl font-semibold">{data.title}</h1>
        <p>{data.subTitle}</p>
      </header>

      <div className="w-full grid place-content-center">
        <div className="content max-w-[1080px] space-y-10">
          <MDXRemote source={content} />
        </div>
      </div>
    </article>
  );
}
