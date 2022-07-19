import {Grid } from "@mui/material";
import BookCard from "../BookCards/BookCards"

interface TabsandCardStateProps {
  type: string;
  onFinishedClick: () => void;
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
};

const TabsCardState = (props:TabsandCardStateProps) => {
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
              onFinishedClick={props.onFinishedClick}
                book={book}
                typeOfCard={props.type} 
                // bookObject={props.books}
                />
                </Grid>
              }
            </div>
          );
        })}
      </Grid>
    );
  }
  
  export default TabsCardState
