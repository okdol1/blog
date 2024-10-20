import PAGES from "@/constants/page";
import { Post } from "@/types/blog.type";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: Post;
  className?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  post: { slug, thumbnail, date, title, subTitle },
  className = "",
}) => {
  return (
    <article className={`post-card ${className}`}>
      <Link href={`${PAGES.BLOG}/${slug}`} className="w-full">
        <Image
          src={thumbnail}
          alt="Post thumbnail"
          layout="responsive"
          width={100}
          height={50}
        />
        <time className="text-xs">{date}</time>
        <h2 className="text-lg pb-1">{title}</h2>
        <p className="text-sm">{subTitle}</p>
      </Link>
    </article>
  );
};

export default PostCard;
