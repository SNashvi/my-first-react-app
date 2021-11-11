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

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img src="https://m.media-amazon.com/images/I/71f9a+-aSPL._AC_UL320_.jpg" alt="Teach Your Dragon To Share Book" />;

const Title = () => <h1>Teach Your Dragon To Share</h1>;

const Author = () => <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>by Steve Herman</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
