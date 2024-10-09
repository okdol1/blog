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
    <div>
      <h1 className="font-bold border-b pb-3 mb-10">{data.title}</h1>
      <p>{data.date}</p>
      <MDXRemote source={content} />
    </div>
  );
}
