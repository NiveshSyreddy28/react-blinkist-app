import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

import theme from "../../../Themes/Themes";

const styles = {
  tabs: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    cursor: "pointer",
    marginBottom: theme.spacing(8),
  },
  active: {
    color: theme.palette.primary.dark,
    borderBottom: "2px solid",
    paddingBottom: theme.spacing(5),
    textAlign: "center" as "center",
    alignItems: "center",
  },
  inActive: {
    color: theme.palette.textcolor.light,
    borderBottom: "2px solid #E1ECFC",
    paddingBottom: theme.spacing(5),
    textAlign: "center" as "center",
    alignItems: "center",
  },
};

const SynopsisBar = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleClick = (value: number) => {
    setActiveTab(value);
  };

  return (
    <Box style={styles.tabs} data-testid="SynopsisBar">
      <Typography
        variant={activeTab === 0 ? "subtitle2" : "subtitle3"}
        component="h3"
        onClick={() => handleClick(0)}
        style={activeTab === 0 ? styles.active : styles.inActive}
        data-testid="SynopsisBar Tab-1"
      >
        Synopsis
      </Typography>
      <Typography
        variant={activeTab === 1 ? "subtitle2" : "subtitle3"}
        component="h3"
        style={activeTab === 1 ? styles.active : styles.inActive}
        data-testid="SynopsisBar Tab-2"
      >
        Who is it for?
      </Typography>
      <Typography
        variant={activeTab === 2 ? "subtitle2" : "subtitle3"}
        component="h3"
        style={activeTab === 2 ? styles.active : styles.inActive}
        data-testid="SynopsisBar Tab-3"
      >
        About Author
      </Typography>
    </Box>
  );
};

export default SynopsisBar;