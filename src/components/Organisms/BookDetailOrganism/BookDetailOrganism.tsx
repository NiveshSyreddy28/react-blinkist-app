import ToggleTabs from "../../molecules/ToggleTabs/ToggleTabs";
import BookDetail from "../../molecules/BookDetail/BookDetail";

import React from 'react'
import { Box, CssBaseline } from "@mui/material";

type Book = {
  id:number,
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  readTime: string;
  readersCount: string;
  status: string;
  category:string;
};

interface Props {
  book: Book 
 
}

function index(props:Props) {
  return (
    <div>
      <BookDetail book = {props.book}/>
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