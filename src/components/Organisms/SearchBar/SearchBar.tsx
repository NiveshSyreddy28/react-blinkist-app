import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useEffect, useState } from "react";
import BookCards from "../../molecules/BookCards/BookCards";
import axios from "axios";

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

function SearchBar() {
  const [searchShow, setSearchShow] = useState(false);

  const [bookData, setBookData] = useState<data[]>([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/dataBase",
    })
      .then((res: any) => {
        setBookData(res.data);
      })
      .catch((error: any) => console.log(error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
    BookSearch(e.target.value);
  };

  const [filterBooks, setFilterBooks] = useState<data[]>([]);

  function BookSearch(searchQuery: string) {
    if (bookData) {
      const matchingBooks = bookData.filter((book) => {
        return (
          book.title.toLowerCase().includes(searchQuery) ||
          book.author.toLowerCase().includes(searchQuery)
        );
      });
      setFilterBooks(matchingBooks);
    }
  }
  async function addToReading(id: number) {
    console.log(id);
    await axios
      .get(`http://localhost:3000/dataBase/${id}`)
      .then(async (response) => {
        response.data["status"] = "reading";
        console.log(response.data);
        // await axios.patch(`http://localhost:3000/dataBase/${bookData[id].status},{"finished"}`)
        await axios.delete(`http://localhost:3000/dataBase/${id}`);
        await axios.post(`http://localhost:3000/dataBase/`, response.data);
        document.location.reload();
      });
  }

  return (
    <>
      <Box fontFamily="Cera Pro" data-testid="SearchBar Icon">
        <TextField
          sx={{ margin: " 2% 0%", width: "598px" }}
          id="icon-input-text"
          placeholder="Search by title or author"
          InputProps={{
            style: {
              borderBottom: "2px solid gray",
              fontFamily: "Cera Pro",
              fontWeight: "bold",
              color: "#6D787E",
              paddingBottom: "4px",
            },
            disableUnderline: true,
            color: "secondary",
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="medium" />
              </InputAdornment>
            ),
          }}
          variant="standard"
          onChange={handleChange}
        />
      </Box>

      {/* <Box sx={{display:"flex"}}> */}
      <Box style={{ display: "flex", flexDirection: "row", maxWidth: "500px" }} data-testid="fetch">
        {filterBooks &&
          filterBooks.map((matchBook) => {
            let buttonType =
              matchBook.status === "" ? "myLibrary" : matchBook.status;
            if (searchShow) {
              return (
                <Box>
                  <BookCards
                    book={matchBook}
                    onFinishedClick={() => addToReading(matchBook.id)}
                    typeOfCard={buttonType}
                    // bookObject={[]}
                  />
                </Box>
              );
            }
          })}
      </Box>
    </>
  );
}

export default SearchBar;
