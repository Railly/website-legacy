import Image from "next/image";

export default function ImageMd({ src, width, height }) {
  return (
    <div
      className="flex flex-wrap relative drop-shadow-xl
      my-10"
    >
      <Image
        className="rounded-lg"
        src={src}
        blurDataURL={src}
        width={width}
        height={height}
        placeholder="blur"
      />
    </div>
  );
}
