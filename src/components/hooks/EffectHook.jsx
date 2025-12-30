import React, { useEffect } from "react";
import { useState } from "react";
import '../../App.css'

const EffectHook = () => {
  const [count, setCount] = useState(0);
  const [randomNumber] = useState( Math.floor(Math.random()* 5) +1 )
  const [greet, setGreet] = useState('');


useEffect(()=>{

//localStorage.setItem('rAndom', randomNumber)
    switch(randomNumber){
        case 1:
            setGreet('AssalamuAlaykum')
            break;
        case 2:
            setGreet('Hello')
            break;
        case 3:
            setGreet('Hi')
            break;
        case 4:
            setGreet('Hey')
            break;
        case 5:
            setGreet('WhatsUp')
            break;
        default:
            setGreet('Salam')
            
    }

    // return ()=>{
    //     console.log('clean');
    //     localStorage.removeItem('rAndom')
    // }


}, [randomNumber])

  function increaseCount() {
    setCount((prev) => prev + 3);
  }

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <div>
        <h4>
          firstly , lets know about <u>side-effect</u>: all operations or things
          that are happen in a component but not directly related to the
          component output. <br />
          [e.g:- DOM manipulation, Async api calls, writing to storage(local),IO
          operations, Subscription, even console.log()]
        </h4>
      </div>
      useEffect() is built in hook from react that handle the side effect of a
      component.
      <ul>
        <h4>6 usages of useEffect() hook:-</h4>
        <li>
          1. runs after initial+ every re-render of component.
          <br />
          ***useeffect() with no dependency array.
        </li>
        <br />
        <li>
          2. runs after mount(creation) component or we can say after (Initial
          render). <br />
          ***useeffect() with empty dependency array.
        </li>
        <br />
        <li>
          3. runs after 1st render and whenever "STATE" changes of component.
          <br />
          ***useeffect() with dependency array which contains 'stateValue'.
        </li>
        <br />
        <li>
          4. runs after 1st render and whenever "PROPS" changes of component.
          <br />
          ***useeffect() with dependency array which contains 'propsValue'.
        </li>
        <br />
        <li>
          5. runs only after "PROPS" & "STATE" changes of component.
          <br />
          ***useeffect() with dependency array which contains both 'propsValue'
          & 'stateValue' .
        </li>
        <br />
        <li>
          6. useEffect() with cleanUp function.
          <br />
          ***in useeffect's callback , after declaring all side-effect if we
          write all side-effect cleanup logic in a function and return it from
          that callback then it call cleanup function
          <br />
          ***cleanup logic runs when the component unmount or everytime before
          the next rendering of the component.
        </li>
        <br />
      </ul>
      <h3>
        **Rule to Remember (Very Important) <br/>

        1. Event handlers → write directly in functions <br />
        2. Side effects after render → write in useEffect**
      </h3>
      <h3>
         3. If new state depends on old state →
        ALWAYS use functional update**
      </h3>

      <div>{count}</div>
      <button onClick={increaseCount}>increase by +3</button>
    
    <div>
        <h2 title="if u reload browser greet message will change!" > Random greeting using useEffect( )</h2>
        
       
        <h1 className="greetbox">{greet}</h1> 
       

    </div>
      


    </div>
  );
};

export default EffectHook;
