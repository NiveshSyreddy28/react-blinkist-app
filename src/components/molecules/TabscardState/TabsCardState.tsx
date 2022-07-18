import { Box, Grid } from "@mui/material";
import BookCard from "../BookCards/BookCards"

interface TabsandCardStateProps {
  type: string;
  onFinishedClick: (arg: Book) => void;
  books: Array<Book>;
  // cardType: string;
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
  // imag: string,
  //   bookName: string,
  //   author: string,
  //   time: string,
  //   user: string,
  //   count: string,
  //   trending: string,
  //   justAdded: string,
  //   featured:string,
  //   added: string,
  //   id: number,
  //   status: string
};

// const TabsandCardState = (props: TabsandCardStateProps) => {
//   //   const type = props.type
//   return (
//     <Box sx={{
//         display: "flex",
//         flexWrap: "wrap",
//         margin:"0%",
//         padding:"0%"
//       }}>

//       {props.books.map((book: Book) => {
//         if (props.type === book.status) {
//           // const status = book.status
//           return (
//             <Box>
//               <Cards
//                 key={book.author + book.title}
//                 onFinishedClick={() => props.onFinishedClick(book)}
//                 book={book}
//                 typeOfCard={props.cardType}
//               />
//             </Box>
//           );
//         }
//       })}
//     </Box>
//   );
// };

// export default TabsandCardState;

const TabsandCardState = (props:TabsandCardStateProps) => {
    const {type} = props
    return (
      <Grid item columns={10}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          margin:"0%",
          padding:"0%"
        }}
      >
  
        {props.books.map((book: Book) => {
          const { status } = book
          return (
            <div>
              {(type === status ) &&
                <Grid>
              <BookCard
             key={book.author+book.title}
              onFinishedClick={() => props.onFinishedClick(book)}
                book={book}
                typeOfCard={props.type} 
                bookObject={props.books}
                />
                </Grid>
              }
            </div>
          );
        })}
      </Grid>
    );
  }
  
  export default TabsandCardState
