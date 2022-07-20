import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { makeStyles } from "@mui/styles";
import { Box, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";
import Buttons from "../../atoms/Button/Buttons";
import AddIcon from "@mui/icons-material/Add";
import BookReadTime, { TotalReads } from "../../molecules/BookReadTime/BookReadTime";
import axios from "axios";

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

interface BookCardProps {
  book: Book;
  typeOfCard?: string;
  onFinishedClick: (arg: any) => void;
}
const useStyles: any = makeStyles(() => ({
  flexGrow: {
    flex: "1",
  },
  titleOfBook: {
    color: "#03314B",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "23px",
    paddingBottom: "3px",
    fontFamily: "Cera Pro",
  },
  authorName: {
    color: "#6D787E",
    fontFamily: "Cera Pro",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    paddingBottom: "10px",
    paddingTop: "10px",
  },

  Reads: {
    display: "flex",
    margin: "2px",
    justifyContent: "space-between",
    whiteSpace: "nowrap",
    paddingTop: "6px",
  },
  timeText: {
    display: "flex",
    position: "absolute",
    left: "32px",
    top: "395px",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#6D787E",
    height: "18px",
    width: "96px",
    borderRadius: "nullpx",
  },

  timeText1: {
    display: "flex",
    position: "absolute",
    left: "56px",
    top: "397px",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#6D787E",
    height: "18px",
    width: "96px",
    borderRadius: "nullpx",
  },
  personText: {
    display: "flex",
    position: "absolute",
    left: "200px",
    top: "395px",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#6D787E",
    height: "18px",
    width: "96px",
    borderRadius: "nullpx",
  },
  personText1: {
    display: "flex",
    position: "absolute",
    left: "225px",
    top: "397px",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#6D787E",
    height: "18px",
    width: "96px",
    borderRadius: "nullpx",
  },
  finish: {
    display: "flex",
    color: "#0365F2",
    textAlignment: "centre",
    justifyContent: "center",
    paddingBottom: "16px",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
  },
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#E1ECFC",
  },
}));

const BookCard = (props: BookCardProps) => {
  
  const classes = useStyles();
  const typeOfCard = props.typeOfCard;

  async function addToFinished(bookId:number) {
    await axios
      .get(`http://localhost:3000/dataBase/${bookId}`)
      .then(async (response) => {
        response.data["status"] = "finished";
        console.log(response.data);
        await axios.delete(`http://localhost:3000/dataBase/${bookId}`);
        await axios.post(`http://localhost:3000/dataBase/`, response.data);
        document.location.reload();
      });
  }

  async function addToRead(BookId:number) {
    await axios
      .get(`http://localhost:3000/dataBase/${BookId}`)
      .then(async (response) => {
        response.data["status"] = "reading";
        console.log(response.data);
        await axios.delete(`http://localhost:3000/dataBase/${BookId}`);
        await axios.post(`http://localhost:3000/dataBase/`, response.data);
        document.location.reload();
      });
  }

  const id = props.book.id;
  return (
    <Box sx={{ padding: "12px 35px 20px 0px" }}>
      <Card
        sx={{
          width: "284px",
          borderRadius: "8px",
        }}
      >
        <CardMedia
          component="img"
          height="294.1"
          width="292"
          src={require(`../../../stories/assets/coverImages/${props.book.imageLink}`)}
          alt="Book Cover"
        />
        <Link
          style={{ textDecoration: "none" }}
          to={`/explore/bookdetails/${id}`}
        >
          <CardContent>
            <Box className={classes.titleOfBook}>
              <Typography
                className={classes.titleOfBook}
                variant="subtitle1"
                children={props.book.title}
              />
            </Box>
            <Box>
              <Typography
                className={classes.authorName}
                variant="subtitle1"
                children={props.book.author}
              />
            </Box>
            <Box className={classes.Reads}>
              <BookReadTime />
              <TotalReads />
            </Box>
          </CardContent>
        </Link>

        <Box>
          {typeOfCard === "myLibrary" && (
            <Box paddingTop="5%">
              <Buttons
                name={"Add to Library"}
                classing={"library"}
                icon={<AddIcon />}
                onClick={props.onFinishedClick}
                end
              />
            </Box>
          )}

          {typeOfCard === "finished" && (
            <Box>
              <Box className={classes.finish}>
                <Buttons
                  name={"Read Again"}
                  onClick={() => addToRead(props.book.id)}
                  classing={"readAgain"}
                  icon={undefined}
                  end={undefined}
                ></Buttons>
              </Box>
              <BorderLinearProgress variant="determinate" value={100} />
            </Box>
          )}

          {typeOfCard === "reading" && (
            <Box>
              <div className={classes.finish}>
                <Buttons
                  name={"Finished"}
                  onClick={() => addToFinished(props.book.id)}
                  classing={"finished"}
                  icon={undefined}
                  end={undefined}
                ></Buttons>
              </div>
              <BorderLinearProgress variant="determinate" value={30} />
            </Box>
          )}
        </Box>
        <Box>
          {typeOfCard === "explore" && (
            <Box>
              <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton aria-label="hamburger">
                  <MoreHorizIcon />
                </IconButton>
              </CardActions>
              <BorderLinearProgress variant="determinate" value={30} />
            </Box>
          )}
        </Box>
      </Card>
    </Box>
  );
};

export default BookCard;
