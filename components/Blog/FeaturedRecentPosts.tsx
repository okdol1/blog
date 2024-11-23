import { Post } from "@/types/blog.type";
import Link from "next/link";
import Image from "next/image";
import PAGES from "@/constants/page";

interface FeaturedRecentPostsProps {
  posts: Post[];
}

const FeaturedRecentPosts: React.FC<FeaturedRecentPostsProps> = ({ posts }) => {
  const latestPost = posts[0];
  

  return (
    <div className="grid grid-cols-2 gap-10">
      <article className="post-card">
        <Link href={`${PAGES.BLOG}/${latestPost.slug}`} className="w-full">
          <Image
            src={latestPost.thumbnail}
            alt="Post thumbnail"
            layout="responsive"
            width={100}
            height={50}
          />
          <time className="text-sm">{latestPost.date}</time>
          <h2 className="text-2xl">{latestPost.title}</h2>
          <p>{latestPost.subTitle}</p>
        </Link>
      </article>

      <div className="col-span-1 grid grid-rows-3 gap-10">
        {posts.slice(1, 4).map(({ slug, thumbnail, date, title, subTitle }) => (
          <article key={slug} className="post-card">
            <Link
              href={`${PAGES.BLOG}/${slug}`}
              className="w-full grid grid-cols-[1fr,2fr] gap-x-5"
            >
              <Image
                src={thumbnail}
                alt="Post thumbnail"
                layout="responsive"
                width={100}
                height={50}
              />

              <div>
                <time className="text-xs">{date}</time>
                <h2 className="text-lg pb-1">{title}</h2>
                <p className="text-sm">{subTitle}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRecentPosts;
