import React from "react";

const Book = ({ img, title, author, alt }) => {
  // attribute, eventHandler
  //OnClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Button Clicked");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt={alt} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More Complex Example
      </button>
    </article>
  );
};

export default Book;
