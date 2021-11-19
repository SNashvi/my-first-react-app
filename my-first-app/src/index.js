import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

import { books } from "./books";
import BookMarkup from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <BookMarkup key={book.id} {...book}></BookMarkup>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
