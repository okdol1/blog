import fs from "fs";
import path from "path";
import matter from "gray-matter";

import PageTitle from "@/components/Typography/PageTitle";
import PostCard from "@/components/Blog/PostCard";
import { extractFirstImage, extractText } from "@/utils/markdownUtils";

const getPosts = () => {
  const postsDirectory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      title: data.title,
      subTitle: data.subTitle || extractText(content).slice(0, 200),
      date: data.date,
      slug: filename.replace(".mdx", ""),
      thumbnail: data.thumbnail || extractFirstImage(content),
    };
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <>
      <PageTitle title="The Blog" />

      <section className="grid grid-cols-1 gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </>
  );
}
