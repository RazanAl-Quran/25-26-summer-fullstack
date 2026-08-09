import { useState } from "react";
import Greeting from "./components/Greeting";
import People from "./components/People";
function App() {

  const age = 25;
  const element = <h2>hello razan</h2>
  const username = "Qudah"

  // let count = 0;
  let [count, setCount] = useState(0);


  const handleClick = () => {
    // count++;
    // console.log(count);
    setCount(count++);

  }

  return (
    <>
      <h1>hello there!!! {age}</h1>
      {element}

      <Greeting username={username} lastname="atharbeh" />

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>🚀 React Basics Demo</h1>

        <h3>Count value is {count}</h3>
        <button onClick={handleClick}>Click me</button>

        <People/>


      </div>

    </>
  )
}

export default App;
