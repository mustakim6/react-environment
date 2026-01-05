import React from "react";

const VirtualDOM = () => {
  return (
    <div>
      <h3>
        <u>Virtual Dom</u>
      </h3>
      <h4>
        Firstly The DOM (Document Object Model) is a tree-like representation of
        an HTML document. It represents the structure of a web page as
        objects.Using JavaScript and the DOM API, we can access, modify, add, or
        remove any element or node dynamically. <br />
        The DOM is a tree: <br />
        Root → document <br />
        Parent nodes → elements <br />
        Leaf nodes → text, comments
      </h4>

      <p>html - dom - render view -</p>
      <ul>
        <h3>Dom manipulation is comprise with 3 things:</h3>
        <li>query the dom</li>
        <li>updating the dom</li>
        <li>render / re-rendering the dom</li>
      </ul>
      <h3>The Virtual DOM is a lightweight JavaScript representation of the real DOM, which React uses to efficiently determine and update only the necessary changes in the actual DOM tree.(Diff)</h3>
      <h5>React keeps the in-memory virtual representation of the actual Dom and keep it sync with a batch update. This process is called reconciliation.</h5>
      
    <p>react compare with keys and if  found any match then they stay unchanged if new key then create element and if no match then element will be removed. </p>  




    </div>
  );
};

export default VirtualDOM;
