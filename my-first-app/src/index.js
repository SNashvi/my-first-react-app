import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

// Nested Components, React Tools

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}
const author = "by Steve Herman";
const Book = () => {
  const title = "Teach Your Dragon To Share";
  return (
    <article className="book">
      <img src="https://m.media-amazon.com/images/I/71f9a+-aSPL._AC_UL320_.jpg" alt="Teach Your Dragon To Share Book" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
