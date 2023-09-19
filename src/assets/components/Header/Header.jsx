import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex text-white justify-between p-5 bg-blue-600">
        <h2 className="font-bold border-2 rounded-lg border-amber-500">
          <i className="p-1">/My web/</i>
        </h2>
        <nav className="space-x-2">
          <Link className="hover:underline  decoration-amber-500" to="/">
            Home
          </Link>
          <Link className="hover:underline  decoration-amber-500" to="/about">
            About
          </Link>
          <Link className="hover:underline  decoration-amber-500" to="/users">
            Users
          </Link>
          <Link
            className="hover:underline  decoration-amber-500"
            to="/comments"
          >
            Comments
          </Link>
          <Link className="hover:underline  decoration-amber-500" to="/contact">
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
