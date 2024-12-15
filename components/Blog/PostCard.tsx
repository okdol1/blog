import PAGES from "@/constants/page";
import { Post } from "@/types/blog.type";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({
  post: { slug, thumbnail, date, title, subTitle },
}) => {
  return (
    <Link
      href={`${PAGES.BLOG}/${slug}`}
      className="group w-full rounded-[10px] overflow-hidden bg-white bg-opacity-10 grid grid-cols-[120px,1fr] gap-x-4 sm:block"
    >
      <div className="relative h-[120px] rounded-[10px] sm:h-[200px] sm:rounded-none overflow-hidden">
        <Image
          src={thumbnail}
          alt="Post thumbnail"
          layout="fill"
          className="object-cover object-left-top transform transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="sm:h-[180px] flex flex-col justify-between sm:p-3 gap-y-2 text-xs">
        <div className="space-y-2">
          <h2 className="text-sm whitespace-pre-wrap break-words font-semibold">
            {title}
          </h2>
          <p className="line-clamp-2 sm:line-clamp-3">{subTitle}</p>
        </div>

        <time>{date}</time>
      </div>
    </Link>
  );
};

export default PostCard;
