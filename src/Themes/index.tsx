import { makeStyles } from "@mui/styles";


const customStyles = makeStyles({
  time: {
    display: "flex",
    justifyContent: "flex-start",
    columnGap: "6px",
  },
  bannerCardImage: {
    border: "none",
    boxShadow: "none",
    height: "230px",
    width: "250px",
    backgroundColor: "#F1F6F4",
    marginleft: "618px",
    margintop: "17px",

  },
   bannerBox: {
    backgroundColor: "#F1F6F4",
    marginTop: "32px",
    height: "264px",
    width: "912px",


  },
  explorecontent: {
    width: "461px",
    height: "69px",
    color: "#6D787E",
    fontfamily: "Cera Pro",
    fontsize: "18px",
    fontweight: "400",
    lineheight: "23px",
    textalign: "left",



  },
  headerLink:{
    display: "flex",
    fontFamily:"Cera Pro",
    fontWeight:"500",
    alignItems: "center", 
    fontSize:"16px",
    color: "#03314B" ,
    textTransform:"none",
    width:"auto",
    "&:hover": {
      backgroundColor: "white",
      borderBottom: "solid 3px #22C870",
      justifyContent:"center",
    }
  },
  exploretitle: {
    height:"90px",
    width: "319px",
    fontfamily: "Cera Pro",
    fontsize: "36px",
    fontweight: "700",
    lineheight: "45px",
    textalign: "left",
    color: "#03314B",
  },
  timeIcon: {
    width: "16.67px",
    height: "16.67px",
  },
  personIcon: {
    width: "13.33px",
    height: "17.7px",
  },
  iconText: {
    color: "#6D787E",
  },
  bookTitle: {
    fontSize: "30px",
    fontWeight: "bold",
    lineHeight: "23.63px",
    color: "#03314B",
    fontFamily:"Cera Pro",
    width:"225px",
    height:"23px",
    
        
  },
  bookAuthor: {
    fontWeight: 500,
    color: "#6D787E",
    lineHeight: "20.11px",
    fontsize: "16px",
    fontweight: "500",
    lineheight: "20px",
  },
  toggletabs:{

    fontFamily: "Cera Pro",
    fontSize: "16px",
    fontWeight: "Bold",
    lineHeight: "20px",
  
    height:"20px",
    "&:hover":{Color: "#03314B"},
    margin: "16px 0px",
    textTransform: "none",
  },
  toggleContent:{
    color: "#03314B",
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: "500",
    fontSize: '16px',
    lineHeight: '20px',
  },
  buttonstyle: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20.11px",
    textTransform: "none",
  },
  Finishedbtn:{
    fontfamily: "Cera Pro",
    fontsize: "16px",
    fontweight:"500",
    lineheight: "20px",
    color:"#0365F2",
    width: "62px",
    height: "20px",
    textTransform:"none"
    },
    ReadAgainbtn:{
      
    fontfamily: "Cera Pro",
    fontsize: "16px",
    fontweight: "500",
    lineheight: "20px",
    width: "100px",
    height: "20px",
    textTransform:"none"
    },
  readNowButton: {
    color: "#22C870",
    border: "1px solid #042330",
    borderRadius: "4px",
    width: "122px",
    height: "44px",
  },
  
  finishedReading: {
    background: "#2CE080;",
    borderRadius: "4px",
    width: "170px",
    height: "44px",
    color: "#03314B",
    "&:hover": {
      background: "#00C263",
    },
  },
  sendToKindle: {
    color: "#6D787E;",
    borderRadius: "4px",
    width: "151px",
    whiteSpace:"nowrap",
    fontWeight: "bold",
    height: "44px",
  },
  addToLib: {
    height: "20px",
    width: "103px",
    
    fontfamily: "Cera Pro",
    fontsize: "16px",
    fontweight: "400",
    textTransform:"none",
  
  },
  addtoLibrarybtn: {
    width: "100%",
    textTransform: "none",
    color: "#0365F2",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20.11px",
    "&:hover": {
      color: "white",
      backgroundColor: "#0365F2",
    },
  },

  blinks:{
    color:"#03314B",fontWeight: 700,fontfamily: "Cera Pro",fontsize: "24px",fontweight: "700",lineheight: "30px",height: "30px",textAlign:"left"

  },
  CardHead: {
    background: "#FFF",
    border: "1px solid #E1ECFC",
    borderRadius: "8px",
    width: "300px",
    Height: "466px",
  },
  bookInfo: {
    color: "#03314B",
  },
  footer: {
    width: "542px",
    height: "224px",
  },
  footerNavlinks:{
    
fontfamily: "Cera Pro",
fontsize: "16px",
fontweight: 400,
lineheight: "24px",
textalign: "left",
height: "24px",
width: "214px",


  },
  visible: {
    
    position:"absolute",
    height: "250%",
    zIndex:1,
    width:"100%"
  },
  hidden: {
    display: "none",
  },
  footertitle:{
    width:"378px",height:"64px",color:"#0365F2",fontsize:"24px",fontweight: "500",lineheight: "32px",textalign:"left"
  }
  ,
  footertag:{
    fontfamily: "Cera Pro",fontsize: "10px",fontweight: "400",lineheight: "22px",color:"#6D787E"
  },
  exploreButton:{
    width: "auto",
    height: "28px",
    justifyContent:"center",
    "&:hover": {
      backgroundColor: "white",
      borderBottom: "solid 3px #22C870",
      justifyContent:"center",
    }
}
});
export { customStyles };