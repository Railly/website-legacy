import DarkMode from "components/Icons/DarkMode";
import Github from "components/Icons/Github";
import LightMode from "components/Icons/LightMode";
import Twitter from "components/Icons/Twitter";
import { StyledLink as Link } from "components/Link";

export default function Header({ darkMode, toggleMode }) {
  return (
    <header className="backdrop-filter backdrop-blur-md bg-white bg-opacity-40 border-b border-gray-200 dark:border-gray-600 sticky top-0 z-10 py-2 md:py-6 md:mb-6 text-gray-700 dark:text-gray-200 dark:bg-gray-800 dark:bg-opacity-40">
      <div className="px-4 mx-auto lg:max-w-5xl md:flex md:items-center md:justify-between">
        <Link to="/">RAILLY HUGO</Link>
        <nav className="flex justify-between w-96">
          <button onClick={toggleMode}>
            {darkMode ? (
              <LightMode className="fill-current dark:text-gray-200 hover:text-indigo-500 dark:hover:text-yellow-500 transition-colors" />
            ) : (
              <DarkMode className="fill-current dark:text-gray-200 hover:text-indigo-500 transition-colors" />
            )}
          </button>
          <Link to="/projects">Proyectos</Link>
          <Link to="/blog">Blog</Link>
          <Link to="https://twitter.com/RaillyHugo" external>
            <Twitter
              className="fill-current dark:text-gray-200 hover:text-indigo-500 dark:hover:text-blue-400 transition-colors"
              height={25.6}
              width={20.9}
            />
          </Link>
          <Link to="https://github.com/Railly" external>
            <Github
              className="fill-current dark:text-gray-200 hover:text-indigo-500 dark:hover:text-blue-400 transition-colors"
              height={25.6}
              width={20.9}
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}
