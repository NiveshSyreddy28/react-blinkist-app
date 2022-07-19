import Header from "../../Organisms/Header/Header";
import Footer from "../../Organisms/Footer/Footer";
import BookDetailOrganism from "../../Organisms/BookDetailOrganism";
import RootTemplate from "../../Template/Template";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getBooks} from "../../../Data/Data"
// import ToggleTabs from "../../molecules/ToggleTabs/ToggleTabs";

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

function BookDetailViewPage() {

  // console.log("inside Book detail page")

  let {id}=useParams()
  let ind = Number(id)
  console.log(typeof ind)
  // const [bookData, setBookData] = useState<data[]>([])
  const[bookData, setBookData] = useState<data>(getBooks()[1])
  useEffect(() => {
    
    const axios = require("axios").default;

    axios({
      method: "get",
      url: `http://localhost:3000/dataBase/${ind}`,
    })
      .then((res: any) => {
        setBookData(res.data);
        // console.log(bookData)
      })
      .catch((error: any) => console.log(error));
  }, []);
  
  return (
    
    <RootTemplate 
    header={<Header avatarIcon={true}/>} 
    body={
      <div>
    <BookDetailOrganism book={bookData}/>
    </div>
    } 
    footer={<Footer />} 
    />
  )
}

export default BookDetailViewPage
