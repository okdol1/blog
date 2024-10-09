import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

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
    };
  });

  return posts;
};

export default function BlogPage() {
  const posts = getPosts();

  // 나중에 디자인 ..
  return (
    <div className="space-y-5">
      <h1 className="font-bold border-b pb-3 mb-10">Blog</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="flex items-center gap-x-3">
            <div>✦</div>
            <Link href={`/blog/${post.slug}`} className="w-full">
              <p className="text-2xl font-bold">{post.title}</p>
              <p>{`${post.date} | ${post.subTitle}`}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
