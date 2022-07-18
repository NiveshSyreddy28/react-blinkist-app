import React from "react";
import Icons from "../../atoms/Icons/Icons";
import building from "../../../stories/assets/politics.svg";
import NavMenuLink, { NavMenuLinkProps } from "./NavMenu";

export default {
  title: "molecules/NavMenuLink",
  component: NavMenuLink,
};

export const component = (props: NavMenuLinkProps) => (
  <NavMenuLink {...props} />
);

component.args = {
  text: "Add to library",
  icon: <Icons src={building} />,
  url: "/",
};