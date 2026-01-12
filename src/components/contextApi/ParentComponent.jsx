import React from "react";
import ChildComponent from "./ChildComponent";
import InfoContext from "./context/InfoContext";
import "../../App";

const ParentComponent = () => {
  const familySecret = {
    familyName: "the Smiths",
    onlyParentshouldKnow: () => {
      return "The Smiths are the best.";
    },
    onlyChildrenKnow: () => {
      return "They are the best.";
    },
  };

  return (
    <>
      <div>
        <h1>ContextAPI:</h1>
        <h2>
          The Context API is a way to share data across components without
          passing props manually at every level (“prop drilling”).
        </h2>
        <ul>
          Three core steps to implement context api:
          <li>
            1. Creates a context object.{" "}
            {`e.g:  export const ThemeContext = createContext();`}
          </li>
          <li>
            2. Wraps part of your app and provides the shared value.
            {`e.g: <ThemeContext.Provider value="dark">
  <App /> 
</ThemeContext.Provider>`}
          </li>
          <li>
             3. Consumes the context in any child component. {`e.g: const theme = useContext(ThemeContext);`}
          </li>
        </ul>

      </div>

      <div className="border">
        <InfoContext.Provider value={familySecret}>
          <h2>Parent Component</h2>
          <ChildComponent></ChildComponent>
        </InfoContext.Provider>
      </div>
    </>
  );
};

export default ParentComponent;
