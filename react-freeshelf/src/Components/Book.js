import { useState } from 'react';

const Book = (book) => {
  const { title, author, url, shortdesc, thumb, pub, pubDate, longdesc } = book;
  const [hidden, setHidden] = useState(true);

  return (
    <div className='book'>
      <div className='bookDeets'>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>{shortdesc}</p>
        {hidden ? (
          <button onClick={() => setHidden(false)} aria-expanded='false'>
            Show More Details
          </button>
        ) : (
          <>
            <button onClick={() => setHidden(true)} aria-expanded='true'>
              Hide More Details
            </button>
            <br></br>
            <br></br>
            <a href={`${url}`}>{title} Homepage</a>
            <p>
              <b>Publisher:</b> {pub || 'Not Available'}
            </p>
            <p>
              <b>Publication Date:</b> {pubDate || 'Not Available'}
            </p>
            <br></br>
            <p>
              <b>Full Decription:</b>
            </p>
            <p>{longdesc || 'Not Available'}</p>
          </>
        )}
      </div>
      <div className='bookThumb'>
        <img src={`${thumb}`} alt={`${title} Cover Art`}></img>
      </div>
    </div>
  );
};

export default Book;
