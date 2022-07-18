import { Box } from "@mui/material";
import BookCard from "../../molecules/BookCards/BookCards";
import axios from "axios"
// import { log } from "console";

interface CardStateTrendingProps {
  type: string;
  // onFinishedClick:(arg:Book)=>void;
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
  // const { type, limit } = props;
  // var count = 0;

  // const handleCount = () => {
  //   count+=1
  // };

      async function addToReading(id:number){
          console.log(id)
        await  axios.get(`http://localhost:3000/dataBase/${id}`)
          .then(async response=>{
            
              response.data["status"]="reading";
              console.log(response.data);
              // await axios.patch(`http://localhost:3000/dataBase/${bookData[id].status},{"finished"}`)
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
            bookObject={props.books}/>
          }
          
        </Box>
      );
    })}
  </Box>
    
  );
};

export default CardStateTrending;