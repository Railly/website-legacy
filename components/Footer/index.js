import { StyledLink as Link } from "components/Link";

export default function Footer() {
  return (
    <>
      <footer className="pb-36 mt-24">
        <div className="max-w-5xl px-4 mx-auto text-gray-700 dark:text-gray-200">
          <div className="border-t-2 pb-8 border-gray-300 dark:border-gray-600"></div>
          <div className="flex flex-col justify-between lg:flex-row">
            Hecho con Next.js🖤 y TailwindCSS 💦
            <nav className="flex justify-between w-60">
              <Link to="https://www.linkedin.com/in/railly-hugo/" external>
                Linkedin
              </Link>
              <Link to="https://twitter.com/RaillyHugo" external>
                Twitter
              </Link>
              <Link to="https://github.com/Railly" external>
                GitHub
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
