import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import MyLibPage from './components/pages/MyLibrary/MyLibrary'
import BookDetailPage from './components/pages/BookDetailViewPage/BookDetailViewPage';
import EntrepreneurshipPage from './components/pages/EntrepreneurshipPage/EntrepreneurshipPage';

function Routing() {

    return (
        <Router>
        <Routes>
        <Route  path='/' element={<MyLibPage/>}></Route>
        <Route  path='/explore' element={<EntrepreneurshipPage />}></Route>
        <Route  path='/explore/bookdetails/:id' element={<BookDetailPage />}></Route>
      </Routes>
      </Router>
  )
}

export default Routing;