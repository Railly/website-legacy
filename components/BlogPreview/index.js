import Image from "next/image";
import Link from "next/link";

export default function BlogPreview({ slug, image, title, description }) {
  return (
    <div>
      <Link href={`/blog/${slug}`}>
        <a className="rounded-md p-3 group block hover:text-indigo-500  hover:bg-indigo-50 dark:hover:bg-gray-700 dark:text-gray-200 hover:scale-105 transition-transform">
          <div className="relative mb-4 overflow-hidden rounded-lg text-[0px]">
            <Image
              src={`/${image}`}
              blurDataURL={`/${image}`}
              placeholder="blur"
              width={1920}
              height={960}
              className="align-top"
            />
          </div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="line-clamp-2">{description}</p>
        </a>
      </Link>
    </div>
  );
}
