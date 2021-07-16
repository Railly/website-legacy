import Github from "components/Icons/Github";
import Twitter from "components/Icons/Twitter";
import { StyledLink as Link } from "components/Link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 py-2 bg-white md:py-6 md:mb-6">
      <div className="px-4 mx-auto lg:max-w-5xl md:flex md:items-center md:justify-between">
        <Link to="/" uppercase>
          Railly Hugo
        </Link>
        <nav className="flex justify-between w-80">
          <Link to="/about">Sobre Mi</Link>
          <Link to="/blog">Blog</Link>
          <Link to="https://twitter.com/RaillyHugo" external>
            <Twitter
              className="hover:fill-current text-blue-500 transition-colors"
              height={25.6}
              width={20.9}
            />
          </Link>
          <Link to="https://github.com/Railly" external>
            <Github
              className="hover:fill-current text-blue-500 transition-colors"
              height={25.6}
              width={20.9}
            />
          </Link>
          <button>Hello</button>
        </nav>
      </div>
    </header>
  );
}
