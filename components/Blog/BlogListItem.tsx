import { Post } from "@/types/blog.type";
import Image from "next/image";
import Link from "next/link";

interface BlogListItemProps {
  post: Post;
}

const BlogListItem: React.FC<BlogListItemProps> = ({
  post: { slug, thumbnail, date, title, subTitle },
}) => {
  return (
    <Link href={`/blog/${slug}`} className="w-full">
      <Image
        src={thumbnail}
        alt=""
        layout="responsive"
        width={100}
        height={50}
      />
      <p className="text-2xl font-bold">{date}</p>
      <p className="text-2xl font-bold">{title}</p>
      <p>{subTitle}</p>
    </Link>
  );
};

export default BlogListItem;
