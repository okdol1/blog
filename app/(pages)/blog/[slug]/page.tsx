import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostBody from "@/components/Blog/PostBody";
import { METADATA_IMAGE } from "@/constants/metadata";

const getPost = (slug: string) => {
  const postsDirectory = path.join(process.cwd(), "content");
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return { data, content };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { data } = getPost(slug);

  return {
    title: data.title,
    openGraph: {
      title: data.title,
      url: `https://www.eunbinyeon.com/blog/${slug}`,
      images: [
        {
          url: data.thumbnail,
        },
        METADATA_IMAGE,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { data, content } = getPost(slug);

  return (
    <article className="grid mt-16 mb-20 sm:mb-60">
      <header className="pb-2.5">
        <h1 className="text-[40px] font-bold mb-6">{data.title}</h1>

        <div className="text-sm bg-black border-b space-y-2.5 pb-2.5 mb-2 border-[#262626]">
          <div className="grid grid-cols-[160px,auto] items-center">
            <div className="text-[#A8A8A8]">작성 날짜</div>
            <time>{data.date}</time>
          </div>
        </div>
      </header>

      <PostBody content={content} />
    </article>
  );
}
