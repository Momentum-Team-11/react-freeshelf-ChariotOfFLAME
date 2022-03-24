const Book = (book) => {
  const { title, author, url, shortdesc, thumb, pub, pubDate, longdesc, idx } =
    book;
  return (
    <div className='book'>
      <div className='bookDeets'>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>{shortdesc}</p>
        <p>
          <i>Disclosure would go here</i>
        </p>
        <a href={`${url}`}>{title} Homepage</a>
        <p>
          <b>Publisher:</b> {pub}
        </p>
        <p>
          <b>Publication Date:</b> {pubDate}
        </p>
        <br></br>
        <p>
          <b>Full Decription:</b>
        </p>
        <p>{longdesc}</p>
      </div>
      <div className='bookThumb'>
        <img src={`${thumb}`}></img>
      </div>
    </div>
  );
};

export default Book;
