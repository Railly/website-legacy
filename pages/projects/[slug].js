import { getAllPostsMeta, getPostBySlug } from "lib/mdx";
import { format, parseISO } from "date-fns";
import { getMDXComponent } from "mdx-bundler/client";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useMemo } from "react";
import { components } from "components/Markdown";
import Heading from "components/Markdown/Heading";

export const getStaticPaths = () => {
  const projects = getAllPostsMeta("_projects");
  const paths = projects.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths: paths,
    // Return 404 page if path is not returned by getStaticPaths
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params?.slug;
  const project = await getPostBySlug(slug, "_projects");

  return { props: project };
};

export default function ProjectDetails({ meta, code }) {
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

      <div className="container max-w-3xl mx-auto px-4">
        <Heading.H1>{meta.title}</Heading.H1>
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
