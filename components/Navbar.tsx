import React from "react";
import Link from "../node_modules/next/link";
import { FaUserCircle } from "react-icons/fa";

const Navbar: React.FC<Props> = ({ Nheads }) => {
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">
          <FaUserCircle size={35} />
        </a>
      </h1>
      <ul className="main-nav">
        {Nheads.map((Nhead) => (
          <li>
            <Link href={`/${Nhead}`}>
              <a>{Nhead}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;

interface Props {
  Nheads: string[];
}
