import fs from "fs";
import path from "path";
import matter from "gray-matter";

import PageTitle from "@/components/Typography/PageTitle";
import BlogListItem from "@/components/Blog/BlogListItem";

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
    <div>
      <PageTitle title="The Blog" />

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <div className="h-full">
            <BlogListItem post={posts[0]} />
          </div>
        </div>

        <div className="col-span-1 grid grid-rows-3 gap-4">
          {posts.slice(1, 4).map((post) => (
            <div key={post.slug}>
              <BlogListItem post={post} />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {posts.slice(4).map((post) => (
          <BlogListItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
