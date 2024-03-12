import MainNavigation from "@/components/main-navigation/main-navigation";
import { Fragment } from "react";

export default function PostDetailsLayout({ children }) {
  return (
    <Fragment>
      <MainNavigation />
      {children}
    </Fragment>
  );
}
