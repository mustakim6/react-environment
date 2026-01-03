import React, { useState } from "react";
import '../App.css'
import EffectHook from "./hooks/EffectHook";
import RefHook from "./hooks/userefhook/RefHook";

const ReactHooks = () => {

const [color, setColor] = useState('#43ef0aff')

const changeColor = ()=>{
    console.log('color btn clicked');
    const random = `#${Math.floor(Math.random()*16777215).toString(16)}`
    console.log('value is ',random);
    setColor(random)
    
}
    

  return (
    <div>
      <h3>about React-Hook</h3>
      <p>
        Hooks are special js functions in React that let you use state and other
        React features inside functional components.
      </p>
      <pre>
        using hooks:- <br/>
        1.Functional components can manage state<br/>
        2.Handle side effects <br/>
        3.Share logic easily<br/>
        4.we can park statefull logic of a functional-component to an another function.later we also can reuse it.
      </pre>

<h3>1. const [ stateVar, setStateVar ] = useState(initialValue-can be any js value.its optional)</h3>

<p>
    * built-in hook, provided by react.<br/>
    * use to declare and manage state variable.<br/>
    * useState returns an array that contain a variable which hold current state value and a updater function that use for update the state variable.<br/>
    *if we want to avoid re-render a functions value for component re-rendering, we can use lazy initialization.it means we can pass whole function as initial value.<br/>
    * if we need to work with previous stateValue, we can pass a callback function to Updater function.
</p>

<h3>color changing project using useState( )</h3>

<div>
    <div className="colorBox" style={{backgroundColor:color}}>
        <span className="colorCode">{color}</span>
    </div>
    <button className="colorbtn" onClick={changeColor}>change color</button>
</div>

<h3>2. useEffect( callback-Function which contain side effect, dependency-Array)</h3>
<EffectHook></EffectHook>

<h3>3. const ref = useRef( initialValue, can be any js value ) hook, {'Returns an object: { current: initialValue }'}</h3>
<RefHook></RefHook>



    </div>
  );
};

export default ReactHooks;
