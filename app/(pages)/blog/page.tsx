import fs from "fs";
import path from "path";
import matter from "gray-matter";

import PageTitle from "@/components/Typography/PageTitle";
import PostCard from "@/components/Blog/PostCard";
import FeaturedRecentPosts from "@/components/Blog/FeaturedRecentPosts";

const getPosts = () => {
  const postsDirectory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      title: data.title,
      subTitle: data.subTitle || "",
      date: data.date,
      slug: filename.replace(".mdx", ""),
      thumbnail: data.thumbnail,
    };
  });

  return posts;
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <>
      <PageTitle title="The Blog" />

      <section className="space-y-10">
        <FeaturedRecentPosts posts={posts} />

        <div className="grid grid-cols-4 gap-10">
          {posts.slice(4).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
