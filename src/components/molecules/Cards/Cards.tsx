import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import Icons from '../../atoms/Icons/Icons';
// import person from "../../../stories/assets/person.svg";
import Typography from "@mui/material/Typography"
import Buttons from '../../atoms/Button/Button';
import image from '../../../stories/assets/coverImages/2.svg';
import {makeStyles} from "@mui/styles"
import AddIcon from "@mui/icons-material/Add";
import { Box } from '@mui/material';
import ProgressBar from '../../atoms/ProgressBar/ProgressBar';
// import theme from "../../../Themes/Themes"

const useStyles=makeStyles( {
    root:{

        // display:'flex',
        boxSizing: 'border-box',
        background: '#FFFFFF',
        border: '1px solid #E1ECFC',
        borderRadius: '8px',
        width:'284px',
        // height:'466px',
        radius:'8px',
    },
    card:{
        borderRadius: '8px',
        height: '292px',
        width: '294px',
    },
    bookTitle:{
        // height: '23px',
        // width: '216px',
        // fontFamily: theme.typography.heading.fontFamily,
        // fontWeight: "Bold",
        // fontSize: '18px',
        // lineHeight: '23px',
        // letterSpacing: '0em',
        // textAlign: 'left',
        // color: '#03314B',
        // // position: 'absolute',
        // left: '32px',
        // top:' 320px',
        // flex: 'none',
        // order: '0',
        // flexGrow: '0',
        color: "#03314B",
        fontWeight: "800",
        fontSize: "20px",
        lineHeight: "23px",
        paddingBottom: "3px",
    },
    author:{
        // width: '169px',
        // height: '20px',
        // fontFamily: 'Cera Pro',
        // fontWeight: 'Light',
        // fontStyle: 'normal',
        // fontSize: '16px',
        // lineHeight: '20px',
        // color: '#6D787E',
        // flex: 'none',
        // order: '1',
        // flexGrow:'0',
        // // position: 'absolute',
        // left: '32px',
        // top: '360px',
        color: "#6D787E",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "20px",
        paddingBottom: "3px",
        paddingTop: "3px",
    },
    Reads:{
        display: "flex",
        margin: "2px",
        justifyContent: "space-between",
        whiteSpace: "nowrap",
        paddingBottom: "6px",
    },
    timeIcon:{
        // display:'flex',
        // // position: 'absolute',
        // left: '50%',
        // // top: '20%',
        // fontFamily: 'Cera Pro',
        // fontStyle: 'normal',
        // fontWeight: '400',
        // fontSize: '14px',
        // lineHeight: '18px',
        // color: '#6D787E',
        // height: '18px',
        // width: '96px',
        // borderRadius: 'nullpx',
        display:'flex',
        position: 'absolute',
        left: '32px',
        // right: '60.92%',
        top: '395px',
        // bottom: '20.82%',
        fontFamily: 'Cera Pro',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#6D787E',
        height: '18px',
        width: '96px',
        borderRadius: 'nullpx',
    },

    timeText:{
        // display:'flex',
        // // position: 'absolute',
        // left: '56px',
        // right: '60.92%',
        // top: '397px',
        // bottom: '20.82%',
        // fontFamily: 'Cera Pro',
        // fontStyle: 'normal',
        // fontWeight: '400',
        // fontSize: '14px',
        // lineHeight: '18px',
        // color: '#6D787E',
        // height: '18px',
        // width: '96px',
        // borderRadius: 'nullpx',
        display:'flex',
        position: 'absolute',
        left: '56px',
        // right: '60.92%',
        top: '397px',
        // bottom: '20.82%',
        fontFamily: 'Cera Pro',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#6D787E',
        height: '18px',
        width: '96px',
        borderRadius: 'nullpx',
    },
    personIcon:{
        // display:'flex',
        // // position: 'absolute',
        // left: '200px',
        // // right: '32px',
        // top: '395px',
        // fontFamily: 'Cera Pro',
        // fontStyle: 'normal',
        // fontWeight: '400',
        // fontSize: '14px',
        // lineHeight: '18px',
        // color: '#6D787E',
        // height: '18px',
        // width: '96px',
        // borderRadius: 'nullpx',
        display:'flex',
        position: 'absolute',
        // left: '200px',
        // right: '32px',
        // top: '395px',
        // bottom: '20.82%',
        fontFamily: 'Cera Pro',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#6D787E',
        height: '18px',
        width: '96px',
        borderRadius: 'nullpx',
       
    },
    personText:{
        // display:'flex',
        // // position: 'absolute',
        // left: '225px',
        // top: '397px',
        // bottom: '20.82%',
        // fontFamily: 'Cera Pro',
        // fontStyle: 'normal',
        // fontWeight: '400',
        // fontSize: '14px',
        // lineHeight: '18px',
        // color: '#6D787E',
        // height: '18px',
        // width: '96px',
        // borderRadius: 'nullpx',
    //     display: "flex",
    //     margin: "2px",
    //     justifyContent: "space-between",
    //     whiteSpace: "nowrap",
    //     paddingBottom: "6px",
            display:'flex',
            position: 'absolute',
            left: '225px',
            // right: '32px',
            top: '397px',
            // bottom: '20.82%',
            fontFamily: 'Cera Pro',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '18px',
            color: '#6D787E',
            height: '18px',
            width: '96px',
            borderRadius: 'nullpx',
    },
    library:{
        height: '52px',
        width: '284px',
        left: '16px',
        top: '430px',
        padding: '14px, 24px, 14px, 24px',
        position: 'absolute',
        borderTop: '1px solid #E1ECFC',
        
    },
    finished:{
    //     // position:"absolute",
    //     left: "120px",
    //     top: "430px",
    //     fontFamily: "Cera Pro",
    //     fontWeight: "Bold",
    //     fontSize: "16px",
    //     lineHeight: "20px",
    //     letterSpacing: "0em",
    //     // textAlign: "center",
    //     // alignItems: "center",
    //     color: "#0365F2",
        display:'flex',
        color:"#0365F2",
        top:"427px",
        left:'120px',
        position:'absolute',
        textAlignment:'centre',
        fontFamily: 'Cera Pro',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '20px',
    },

    readAgain:{
        // position:"absolute",
        left: "70px",
        // top: "430px",
        fontFamily: "Cera Pro",
        fontWeight: "Bold",
        fontSize: "16px",
        lineHeight: "20px",
        letterSpacing: "0em",
        // textAlign: "center",
        // alignItems: "center",
        color: "#0365F2",
    },
    progressBar:{
        // position: "inherit",
        height: "16px",
        width: "282.5px",
        // top: "465.5px",
        // left: "17px",
        

    },
    explore:{
        height: "4px",
        width: "18px",
        left: "245px",
        top: "405px",
        borderRadius: "0px",
        position: "absolute",
        fontSize: "30px",
        // left: "12.5%",
        // right: "12.5%",
        // top: "41.67%",
        // bottom: "41.67%",
        // background: "#042330",

    }
})

type Book = {
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
};

interface BookCardProps {
  book: Book;
  typeOfCard?: string;
  onFinishedClick: (arg: any) => void;
//   bookObject: Array<Book>;
}

function Bookcard(props:BookCardProps) {
    const classes=useStyles();
    let button
    if (props.typeOfCard === 'Library') {
        button = <div className={classes.library}>
        <Buttons name={'Add to Library'} classing={"library"} icon={<AddIcon/>} onClick={"none"} end /> 
    </div>
    }
    else if(props.typeOfCard === 'Finished'){
        button = <div> <Box className={classes.finished}><Buttons name={'Finished'} onClick={undefined} classing={'finished'} icon={undefined} end={undefined}></Buttons></Box>
                <Box className={classes.progressBar}><ProgressBar type='semi'/></Box></div>
    }
    else if(props.typeOfCard === 'Read again'){
    button = <div> <Box className={classes.readAgain}><Buttons name={'Read Again'} onClick={undefined} classing={'readAgain'} icon={undefined} end={undefined}></Buttons></Box>
    <Box className={classes.progressBar}><ProgressBar type='full'/></Box></div>
    }

    else if(props.typeOfCard === "Explore"){
        button = <div> <Typography className={classes.explore}>...</Typography>
        <Box className={classes.progressBar}><ProgressBar type='semi'/></Box></div>
    }
  return (
    <div className={classes.root}>
        <div className={classes.card}>
            <img src={image} alt="card" />
        </div>
        
        <div className={classes.bookTitle}>
            <Typography variant="subtitle1">{props.book.title}</Typography> 
        </div>

        <div className={classes.author}>
            <Typography variant="body2">{props.book.author}</Typography> 
        </div>
        <Box className={classes.Reads}>
        <div className={classes.timeIcon}>
            <AccessTimeIcon fontSize="small" />
        </div>
        
        <div className={classes.timeText}>
            <Typography variant="caption">{props.book.readTime}-minute read</Typography> 
        </div>

        <div className={classes.personIcon}>
            <PersonOutlineIcon fontSize="small" />
            {/* <Icons src={person}></Icons> */}
        </div>

        <div className={classes.personText}>
            <Typography variant="caption">{props.book.readersCount} reads</Typography> 
        </div>
        </Box>
        {button}
        </div>
  )
}

export default Bookcard;