import React from "react";
import Link from "../node_modules/next/link";
import classes from "../styles/Sidebar.module.css";

const Sidebar: React.FC<Props> = ({ Nheads }) => {
  return (
    <nav className={classes.header}>
      <ul className={classes.mainnav}>
        {Nheads.map((Nhead) => (
          <Link href={`/${Nhead}`}>
            <li className={classes.box}>
              <a>{Nhead}</a>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
export default Sidebar;

interface Props {
  Nheads: string[];
}
