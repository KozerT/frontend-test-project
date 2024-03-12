import Link from "next/link";

import classes from "./main-navigation.module.css";
import MainNavigationButton from "./main-navigation-button";
import ListItem from "./list-item";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <ListItem />
          <li>
            <Link href={"/"} passHref={true}>
              <MainNavigationButton />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
