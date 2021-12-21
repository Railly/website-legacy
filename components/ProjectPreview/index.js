import Link from "next/link";
import Image from "next/image";
import { chipStyle } from "utils/constanst";

export default function ProjectPreview({
  slug,
  image,
  title,
  description,
  tag,
}) {
  return (
    <div>
      <Link href={`/projects/${slug}`}>
        <a className="block p-3 transition rounded-md group hover:bg-indigo-50 dark:hover:bg-gray-700 dark:text-gray-200 hover:scale-105">
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
          <h2 className="pb-2 text-2xl font-bold">{title}</h2>
          <p className="mb-4 line-clamp-3">{description}</p>
          <span className={chipStyle[tag]}>{tag}</span>
          <p className="mt-5 text-sm font-bold text-pink-600 uppercase border-b-2 border-transparent w-28 dark:text-pink-400 group-hover:border-pink-600 dark:group-hover:border-pink-400 animate-bounce">
            Ver Proyecto
          </p>
        </a>
      </Link>
    </div>
  );
}
