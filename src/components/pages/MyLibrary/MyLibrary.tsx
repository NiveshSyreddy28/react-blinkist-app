import React, { useEffect, useState } from 'react'
import RootTemplate from '../../Template/Template'
import Header from '../../Organisms/Header/Header'
import Footer from '../../Organisms/Footer/Footer'
import Tabs from '../../Organisms/Tabs/Tabs'
import { Box, Typography } from '@mui/material'
// import { getBooks } from "../../../Data/Data"
import axios from "axios";

type data = {
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

const useStyles={
  align:{
    marginLeft: "0px" 
  }
}

const MyLibPage = () => {
  const classes=useStyles;
  
  const [bookData, setBookData] = useState<data[]>([]);
  useEffect(() => {
    
    const axios = require("axios").default;

    axios({
      method: "get",
      url: "http://localhost:3000/dataBase",
    })
      .then((res: any) => {
        setBookData(res.data);
      })
      .catch((error: any) => console.log(error));
  }, []);

  return (
    <RootTemplate
      header={<Header></Header>}
      body={
        <div>
          <Box style={{display:'flex', flexDirection:'column', width:'1000px'}}>
          <Typography variant='h5' fontFamily={"Cera Pro"} fontWeight="Bold" fontSize={"36px"} paddingBottom="3%">My Library</Typography> 
          
          <Tabs value={'1'} onFinishedClick={() =>setBookData} bookObject={bookData}/>
          </Box>
        </div>
      }
      footer={<Footer></Footer>}
    />
  );
}

export default MyLibPage;
const handleClick = (arg: any) => {};