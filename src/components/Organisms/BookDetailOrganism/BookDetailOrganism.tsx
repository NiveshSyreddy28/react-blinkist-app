import ToggleTabs from "../../molecules/ToggleTabs/ToggleTabs";
import BookDetail from "../../molecules/BookDetail/BookDetail";

import React from 'react'
import { Box, CssBaseline } from "@mui/material";

function index() {
  return (
    <div>
      <BookDetail/>
      <Box paddingTop="5%">
      <ToggleTabs/>
      </Box>
      <Box paddingTop="5%" paddingBottom="15%">
        <hr style={{border: "1px solid #E1ECFC"}}></hr>
        </Box>
      
    </div>
  )
}

export default index