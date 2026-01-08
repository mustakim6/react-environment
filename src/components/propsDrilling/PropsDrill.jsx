import React from "react";
import ParentProps from "./ParentProps";
const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

const PropsDrill = () => {
  return (
    <div>
      <h3>
        Props drilling is the process of passing props from a parent component
        to deeply nested child components through intermediate components.
      </h3>

      <p>
        <h4>Why props drilling is a problem</h4>
        Messy code <br /> Hard to maintain <br /> Unnecessary re-renders <br />
        Changes at the top <br />
        affect many components
      </p>

      <p>
        <h4>When props drilling is OK</h4>
        Component tree is shallow <br />
        Only 1–2 levels <br />
        Small applications <br />
      </p>

      <div className="border">
        <h2>PropsDrilling</h2>
        <h6>container which contain main foods name array.</h6>
        <h4>Total fruits are: {fruits.length}</h4>
        <ParentProps fruits={fruits}></ParentProps>
      </div>
    </div>
  );
};

export default PropsDrill;
