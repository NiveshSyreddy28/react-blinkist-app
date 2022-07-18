import BookDetail from './BookDetail';


export default {
    title: "Molecules/bookDetail",
    component: BookDetail
  }
  
  export const bookDetails = () => {

    return (
      <BookDetail book={{
        id: 0,
        author: '',
        country: '',
        imageLink: '',
        language: '',
        link: '',
        pages: 0,
        title: '',
        year: 0,
        readTime: '',
        readersCount: '',
        status: '',
        category: ''
      }}/>
  );}