import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center bg-blue-700 p-4">
      <h1>TISTE</h1>
      <div className=" flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
