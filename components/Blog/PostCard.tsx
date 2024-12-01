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
      className="group w-full block rounded-[10px] overflow-hidden bg-white bg-opacity-10"
    >
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src={thumbnail}
          alt="Post thumbnail"
          layout="fill"
          className="object-cover object-left-top transform transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="h-[180px] flex flex-col justify-between p-3  gap-y-2 text-xs">
        <div className="space-y-2">
          <h2 className="text-sm whitespace-pre-wrap break-words font-semibold">
            {title}
          </h2>
          <p className="line-clamp-3">{subTitle}</p>
        </div>

        <time className="">{date}</time>
      </div>
    </Link>
  );
};

export default PostCard;
