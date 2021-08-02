import Link from "next/link";
import Image from "next/image";

export default function ProjectPreview({ slug, image, title, description }) {
  return (
    <div>
      <Link href={`/projects/${slug}`}>
        <a className="rounded-md p-3 group block hover:bg-indigo-50 dark:hover:bg-gray-700 dark:text-gray-200 hover:scale-105 transition-transform">
          <div className="relative mb-4 overflow-hidden rounded-lg text-[0px]">
            <Image
              src={`/${image}`}
              blurDataURL={`/${image}`}
              placeholder="blur"
              width={1764}
              height={1131}
              className="align-top"
            />
          </div>
          <h2 className="text-2xl font-bold pb-2">{title}</h2>
          <p className="line-clamp-3">{description}</p>
          <p className="mt-4 w-28 font-bold uppercase text-sm text-pink-600 dark:text-pink-400 border-transparent border-b-2 group-hover:border-pink-600 dark:group-hover:border-pink-400 animate-bounce transition-transform">
            Ver Proyecto
          </p>
        </a>
      </Link>
    </div>
  );
}
