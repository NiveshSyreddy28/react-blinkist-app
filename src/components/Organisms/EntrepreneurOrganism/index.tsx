import { Box } from "@mui/material";
import BookCard from "../BookCards/BookCards";
import axios from "axios";

interface CardStateTrendingProps {
  type: string;
  books:Array<Book>;
  
}

type Book = {
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
  category:string;
};

const CardStateTrending = (props: CardStateTrendingProps) => {
      async function addToReading(id:number){
          console.log(id)
        await  axios.get(`http://localhost:3000/dataBase/${id}`)
          .then(async response=>{
            
              response.data["status"]="reading";
              console.log(response.data);
              await axios.delete(`http://localhost:3000/dataBase/${id}`)
            await  axios.post(`http://localhost:3000/dataBase/`,response.data);
            document.location.reload();
            }
          )
          ;
    }
    
  const {type} = props
  console.log(props.books);
  return (
    <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      margin:"0%",
      padding:"0%"
    }}
    data-testid="Filtered Books"
  >
    {props.books.map((book: Book) => {
      const { category } = book
      let buttonType=(book.status==="reading" ? "explore" : "myLibrary")
      return (
        <Box>
          {(type === category ) &&
          <BookCard
        
          onFinishedClick={() => {addToReading(book.id)}}
         
            book={book}
            typeOfCard={buttonType} 
            />
          }
          
        </Box>
      );
    })}
  </Box>
    
  );
};

export default CardStateTrending;