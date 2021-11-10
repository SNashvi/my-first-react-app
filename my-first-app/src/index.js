import React from 'react';
import ReactDom from 'react-dom';

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function Greeting (){
  return (
    <React.Fragment>
      <article>
        <h3>Hello World</h3>
      </article>
    </React.Fragment>
  );
}

// const Greeting = () =>{
//   return React.createElement('h1',{}, 'This is Shohreh and this is my first component');
// }

ReactDom.render(<Greeting/>,document.getElementById('root'));