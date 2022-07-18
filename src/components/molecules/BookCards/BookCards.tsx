import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
// import TypographyComponent from "../../Atoms/Typograpghy/Typography"
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { makeStyles } from "@mui/styles";
import { Theme } from "@emotion/react";
import { Box, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
// import AddToLib from "../AddToLib/AddToLib";
// import ReadAndFinished from "../../Atoms/Buttons/ButtonComponent";
import { Link } from "react-router-dom";
import image from "../../../stories/assets/coverImages/1.png";
import Buttons from "../../atoms/Button/Button";
import AddIcon from "@mui/icons-material/Add";
import BookReadTime, { TotalReads } from "../BookReadTime/BookReadTime";
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
  bookObject: Array<Book>;
}

const useStyles: any = makeStyles((theme: Theme) => ({
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
    // paddingBottom: "6px",
  },
  timeText: {
    display: "flex",
    position: "absolute",
    left: "32px",
    // right: '60.92%',
    top: "395px",
    // bottom: '20.82%',
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
    // right: '60.92%',
    top: "397px",
    // bottom: '20.82%',
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
    // right: '32px',
    top: "395px",
    // bottom: '20.82%',
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
    // right: '32px',
    top: "397px",
    // bottom: '20.82%',
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
    // top: "420px",
    // left: "150px",
    // position: "absolute",
    textAlignment: "centre",
    justifyContent: "center",
    paddingBottom:"16px",
    // paddingTop:"-16px",
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
const images = require.context('../../../stories/assets/coverImages', true);
  const classes = useStyles();
  const typeOfCard = props.typeOfCard;

  async function addToFinished(id:number){
   
    await  axios.get(`http://localhost:3000/dataBase/${id}`)
      .then(async response=>{
        
          response.data["status"]="finished";
          console.log(response.data);
          // await axios.patch(`http://localhost:3000/dataBase/${bookData[id].status},{"finished"}`)
          await axios.delete(`http://localhost:3000/dataBase/${id}`)
        await  axios.post(`http://localhost:3000/dataBase/`,response.data);
        document.location.reload();
        }
      )
      ;   
}

async function addToRead(id:number){
   
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

// function handleClick(){
//   <Link to={"/explore/bookdetails"}>
//   </Link>
// }
 const id = props.book.id;
  return (
    <Box sx={{ padding: "12px 35px 20px 0px" }}>
      
      <Card
      // onClick={handleClick}
        sx={{
          width: "284px",
          borderRadius: "8px",
        }}
      >
        <CardMedia
          component="img"
          height="294.1"
          width="292"
          src={images(`./${props.book.imageLink}`)}
          alt="Book Cover"
        />
        <Link style={{textDecoration: 'none'}} to={`/explore/bookdetails/${id}`} >
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
          {/* <br /> */}
        </CardContent>
        </Link>

        <Box>
          {typeOfCard === "myLibrary" && (
            // <Link
            //   to="/BookDetailPage"
            //   state={{ book: props.book, bookObject: props.bookObject }}
            //   key={props.book.link}
            //   style={{ textDecoration: "none" }}
            // >
              <Box paddingTop="5%">
                {/* <AddToLib children="Add to library" /> */}
                <Buttons
                  name={"Add to Library"}
                  classing={"library"}
                  icon={<AddIcon />}
                  onClick={props.onFinishedClick}
                  end
                />
              </Box>
            // </Link>
          )}

          {typeOfCard === "finished" && (
            <Box>
              <Box className={classes.finish}>
                <Buttons
                  name={"Read Again"}
                  onClick={()=>addToRead(props.book.id)}
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
                  onClick={()=>addToFinished(props.book.id)}
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
            <Box >
              <CardActions sx={{ display: "flex", justifyContent: "flex-end"}}>
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
