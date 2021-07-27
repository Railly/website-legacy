import Heading from "components/Markdown/Heading";
import ProjectPreview from "components/ProjectPreview";
import { getAllPostsMeta } from "lib/mdx";

export const getStaticProps = async () => {
  const projects = getAllPostsMeta("_projects");
  return { props: { projects } };
};

export default function Projects({ projects }) {
  return (
    <div className="container max-w-3xl px-4 mx-auto text-gray-900">
      <Heading.H1>Proyectos</Heading.H1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
        {projects.map((project) => (
          <ProjectPreview key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
}
