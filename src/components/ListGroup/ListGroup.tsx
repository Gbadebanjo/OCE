import { useState } from "react";
import { StyleApp } from "./ListGroup.style";

function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Paris"];
  let selectedIndex = 0;
  //Hook
  // const [isShow, setIsShow] = useState(false);
  // const [increment, setIncrement] = useState()
  // const [decrement, setDecrement] = useState()
  const [react, setReact] = useState();

  const HandleEvent = () => {
    alert("Added to cart!");
  };
  let increment = 0;
  let decrement = 0;

  return (
    <>
      <StyleApp>
        <h1>Counter</h1>
        <div>
          <button onClick={() => setIncrement(increment + 1)}>Increase</button>
          <br />
          <button onClick={() => setDecrement(decrement - 1)}>Decrease</button>
          <h1>{increment}</h1>
        </div>
        <h1>Hello World</h1>
        <button type="submit" onClick={HandleEvent}>
          Submit
        </button>
        <br />
        <br />
        {isShow && <h1>Completed</h1>}
        <button onClick={() => setIsShow(!isShow)}>
          {isShow ? "Hide test" : "Show test"}
        </button>
      </StyleApp>
    </>
  );
}

export default ListGroup;
