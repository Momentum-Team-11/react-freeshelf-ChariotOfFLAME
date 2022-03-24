import Book from './Components/Book';
import booksData from './booksData';

const App = () => {
  return (
    <>
      <h1>Books</h1>
      {booksData.map((book) => {
        return (
          <Book
            title={book.title}
            author={book.author}
            url={book.url}
            shortdesc={book.shortDescription}
            thumb={book.coverImageUrl}
            pub={book.publisher}
            pubDate={book.publicationDate}
            longdesc={book.detailedDescription}
            key={book.idx}
          />
        );
      })}
    </>
  );
};

export default App;
