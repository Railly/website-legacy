import { getAllPostsMeta, getPostBySlug } from "lib/mdx";
import { format, parseISO } from "date-fns";
import { getMDXComponent } from "mdx-bundler/client";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useMemo } from "react";
import { components } from "components/Markdown";
import Heading from "components/Markdown/Heading";

export const getStaticPaths = () => {
  const posts = getAllPostsMeta();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths: paths,
    // Return 404 page if path is not returned by getStaticPaths
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params?.slug;
  const post = await getPostBySlug(slug);

  return { props: post };
};

export default function PostPage({ meta, code }) {
  // This is a bit weird, but this is how mdx-bundler recommends it.
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <NextSeo
        title={`${meta.title} - Railly Hugo`}
        description={meta.description}
        canonical={`https://www.raillyhugo.com/blog/${meta.slug}`}
        openGraph={{
          type: "website",
          url: `https://www.raillyhugo.com/blog/${meta.slug}`,
          title: `${meta.title} - Railly Hugo`,
          description: meta.description,
          images: [
            {
              //url: `https://www.raillyhugo.com/${meta.image}`,
              width: 1200,
              height: 630,
              alt: meta.title,
            },
          ],
          site_name: "Railly Hugo",
        }}
        twitter={{
          handle: "@raillyhugo",
          cardType: "summary_large_image",
        }}
      />

      <div className="container max-w-3xl mx-auto">
        <Heading.H1>{meta.title}</Heading.H1>

        <div className="flex justify-evenly font-medium py-1 mt-4 dark:bg-opacity-50 text-indigo-600 bg-indigo-50 w-72 px-1 rounded-xl dark:text-gray-200 dark:bg-green-700">
          <Image
            className="rounded-full"
            src="/profile.png"
            width={25}
            height={25}
          />
          <div>{`Railly Hugo`}</div>
          <div>{` => `}</div>
          <div>{format(parseISO(meta.publishedAt), "MMMM dd, yyyy")}</div>
        </div>

        {meta.image ? (
          <div className="mt-8 overflow-hidden rounded-2xl text-[0px]">
            <Image
              src={`/${meta.image}`}
              width={1920}
              height={960}
              blurDataURL={`/${meta.image}`}
              placeholder="blur"
            />
          </div>
        ) : null}

        <div className="mt-10">
          <Component components={components} />
        </div>

        {/* <div className="flex justify-center mt-16 space-x-8">
          {meta.source ? (
            <Button href={meta.source} target="_blank">
              View Source Code
            </Button>
          ) : null}
          <LikeButton id={meta.slug} />
        </div>*/}
      </div>
    </>
  );
}
