import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

// Setup Arrays
const books = [
  {
    id: 1,
    author: "by Steve Herman",
    title: "Teach Your Dragon To Share",
    img: "https://m.media-amazon.com/images/I/71f9a+-aSPL._AC_UL320_.jpg",
    alt: "Teach Your Dragon To Share Book",
  },
  {
    id: 2,
    author: "by Andy Griffiths and Terry Denton",
    title: "The 143-Storey Treehouse",
    img: "https://m.media-amazon.com/images/I/91fUxKC9POL._AC_UL320_.jpg",
    alt: "The 143-Storey Treehouse",
  },
  {
    id: 3,
    author: "by Emily Winfield Martin",
    title: "The Wonderful Things You Will Be",
    img: "https://images-na.ssl-images-amazon.com/images/I/81opYgH1BJL._AC._SR360,460.jpg",
    alt: "The Wonderful Things You Will Be",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, alt } = props.book;
  return (
    <article className="book">
      <img src={img} alt={alt} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
