import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-stone-50 shadow-md">
      <nav className="pt-4 pb-4 max-w-7xl mx-auto flex justify-between font-thin text-lg text-gray-700">
        <h2 className="text-xl font-semibold">Sushant Jha</h2>
        <ul className="flex space-x-6">
          <li className="hover:text-sky-700">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-sky-700">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-sky-700">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-sky-700">
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
