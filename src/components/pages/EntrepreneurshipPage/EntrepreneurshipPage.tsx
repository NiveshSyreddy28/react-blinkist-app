import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchBar from '../../Organisms/SearchBar/SearchBar';
import Banner from '../../molecules/Banner/Banner';
import CardStateTrending from '../../Organisms/EntrepreneurOrganism/index';
import Footer from '../../Organisms/Footer/Footer';
import Header from '../../Organisms/Header/Header';
import ParentTemplate from '../../Template/Template';

type data = {
    id: number;
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
    category: string;
};

const EntrepreneurshipPage = () => {

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
    <ParentTemplate
      header={<Header avatarIcon={true}></Header>}
      body={
        <div>
          <Box style={{display:'flex', flexDirection:'column', maxWidth:'100%'}}>
            <Banner/>
            <Box sx={{paddingTop:"2%"}}>
            <SearchBar></SearchBar>
            </Box>

          <Box sx={{paddingTop:"3%"}} style={{display:'flex', flexDirection:'column', width:'1000px'}}>
         <Typography variant="h5" fontFamily={"Cera Pro"} fontWeight={"bold"}>Trending blinks</Typography>
        <CardStateTrending type={'trendingBlinks'} books={bookData} />
        
        <Typography paddingTop="5%" variant="h5" fontFamily="Cera Pro" fontWeight="bold">Just added</Typography>
         <CardStateTrending type={'JustAdd'} books={bookData} />

        <Typography paddingTop="5%" variant="h5"fontFamily="Cera Pro" fontWeight="bold">Featured audio blinks</Typography>
        <CardStateTrending type={'featured'} books={bookData} />
        </Box>
        </Box>
        </div>
      }
      footer={<Footer></Footer>}
    />
  );
};
export default EntrepreneurshipPage;