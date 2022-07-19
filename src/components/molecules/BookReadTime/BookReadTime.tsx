import * as React from "react";

import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";


interface BookReadTimeProps {
  children?: string;
  variant?: "header" | "title" | "subtitle" | "body" | "caption";
}

const BookReadTime = () => (
  <div style={{ display: "flex", alignItems: "center" , flexWrap:"nowrap"}}>
    <AccessTimeIcon fontSize="small" color="action" />
    <Typography paddingLeft="5px" variant="body1" color= "#6D787E" fontFamily="Cera Pro" fontSize="14px">
      13-minute&nbsp;read
    </Typography>
  </div>
);

export const TotalReads = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <PersonOutlineIcon fontSize="small" color="action" />
    <Typography paddingLeft="5px" variant="body1" color="gray" fontFamily="Cera Pro" fontSize="14px">
      1.9k reads
    </Typography>
  </div>
);

export default BookReadTime;