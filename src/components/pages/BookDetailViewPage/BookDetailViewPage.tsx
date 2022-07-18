import Header from "../../Organisms/Header/Header";
import Footer from "../../Organisms/Footer/Footer";
import BookDetailOrganism from "../../Organisms/BookDetailOrganism/BookDetailOrganism";
import RootTemplate from "../../Template/Template";
// import ToggleTabs from "../../molecules/ToggleTabs/ToggleTabs";

function BookDetailViewPage() {
  return (
    <RootTemplate 
    header={<Header/>} 
    body={
      <div>
    <BookDetailOrganism />
    </div>
    } 
    footer={<Footer />} 
    />
  )
}

export default BookDetailViewPage
