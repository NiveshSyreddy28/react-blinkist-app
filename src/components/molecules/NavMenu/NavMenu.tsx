import { Typography } from "@mui/material";
import React, { ReactElement, useState } from "react";

import{ Link }from "react-router-dom";
import theme from "../../../Themes/Themes";

const styles = {
  link: {
    color: theme.palette.textcolor.light,
    textDecoration: "none",
    display: "grid",
    gridTemplateColumns: "max-content auto",
    gap: theme.spacing(2),
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
  linkHover: {
    color: `${theme.palette.secondary.main} !important`,
  },
};

export interface NavMenuLinkProps {
  text: string;
  icon: ReactElement;
  url: string;
}

const NavMenuLink = (props: NavMenuLinkProps) => {
  const [linkHover, setLinkHover] = useState<boolean>(false);

  const handleHover = (value: boolean) => {
    setLinkHover(value);
  };

  return (
    <Link to={props.url} style={styles.link} data-testid="NavMenuLink">
      {props.icon}
      <Typography
        variant="body2"
        onMouseOver={() => handleHover(true)}
        onMouseOut={() => handleHover(false)}
        style={{
          color: linkHover
            ? theme.palette.secondary.main
            : theme.palette.textcolor.light,
        }}
      >
        {props.text}
      </Typography>
    </Link>
  );
};

export default NavMenuLink;