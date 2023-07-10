import React from "react";
import ReactDOM from "react-dom";
import "./Rectangle.css";

function Rectangle(props) {
  return (
    <div className="rectangle">
      <img src={props.image} alt="Rectangle Image" className="image" />
      <h2 className="title">{props.title}</h2>
      <p className="paragraph">{props.paragraph}</p>
      <div className="buttons">
        <button className="button">{props.button1}</button>
        <button className="button">{props.button2}</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Rectangle
        image="https://picsum.photos/200/300"
        title="Example Title"
        paragraph="This is an example paragraph."
        button1="Button 1"
        button2="Button 2"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
