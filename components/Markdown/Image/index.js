import Image from "next/image";

export function ImageMd({ src }) {
  return (
    <div className="relative my-10">
      <Image src={src} placeholder="blur" className="rounded-2xl" />
    </div>
  );
}
