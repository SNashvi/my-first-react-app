import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

// Setup vars
const firsBook = {
  author: "by Steve Herman",
  title: "Teach Your Dragon To Share",
  img: "https://m.media-amazon.com/images/I/71f9a+-aSPL._AC_UL320_.jpg",
  alt: "Teach Your Dragon To Share Book",
};

const secondBook = {
  author: "by Andy Griffiths and Terry Denton",
  title: "The 143-Storey Treehouse",
  img: "https://m.media-amazon.com/images/I/91fUxKC9POL._AC_UL320_.jpg",
  alt: "The 143-Storey Treehouse",
};

function BookList() {
  return (
    <section className="booklist">
      <Book img={firsBook.img} title={firsBook.title} author={firsBook.author} alt={firsBook.alt} />
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} alt={secondBook.alt} />
    </section>
  );
}

const Book = ({ img, title, author, alt }) => {
  // const { img, title, author, alt } = props;
  return (
    <article className="book">
      <img src={img} alt={alt} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
