const Book = (book) => {
  const { title, author, url, shortdesc, thumb, pub, pubDate, longdesc, idx } =
    book;
  return (
    <div className='book'>
      <div className='bookDeets'>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <a href={`${url}`}>{title} Homepage</a>
        <p>{shortdesc}</p>
        <p>{pub}</p>
        <p>{pubDate}</p>
        <p>{longdesc}</p>
      </div>
      <div className='bookThumb'>
        <img src={`${thumb}`}></img>
      </div>
    </div>
  );
};

export default Book;
