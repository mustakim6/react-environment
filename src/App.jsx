import React from "react"
import './App.css'
import MovieComponent from "./components/MovieComponent";
import ReactHooks from "./components/ReactHooks";
import CustomHooks from "./components/hooks/customhoook/CustomHooks";
import HigherOrderComponent from "./components/HOC/HigherOrderComponent";
import VirtualDOM from "./components/VirtualDOM/VirtualDOM";
import ReactMemo from "./components/reactMemo/ReactMemo";


function App() {

  // const jsx = <h1>its a plain js function and inside that we have bunch of statements.its can be export from this file so that later can import to another file. </h1>
  // return jsx;

  
  //React.createElement('type', 'attr/prpperties', 'children')
//  const elem = React.createElement('h1', null, 'sdkf')

//   const jsx = <h1>jsx is awesome </h1>
//   console.log(jsx);
//   // return jsx

//   console.log(elem);

const topic = "JSX";
const likes = ['jsx', 'React', 'Redux']


const pets = [
  {
    name: "Whiskers",
    type: "Cat",
    description: "A playful and curious orange tabby who loves chasing laser dots.",
    skills: ["Jumping", "Playing", "Climbing"],
    image: ""
  },
  {
    name: "Luna",
    type: "Cat",
    description: "A calm and affectionate cat who enjoys quiet naps.",
    skills: ["Sleeping", "Cuddling", "Purring"],
    image: ""
  },
  {
    name: "Shadow",
    type: "Cat",
    description: "A shy black cat with sharp instincts and silent movements.",
    skills: ["Hiding", "Night vision", "Hunting toys"],
    image: ""
  },
]




return(

<>


{/* about ReactMemo start*/}
//about ReactMemo-09
<ReactMemo></ReactMemo>
{/* about ReactMemo end*/}

{/* about VirtualDOM start*/}
//about VirtualDOM-08
<VirtualDOM></VirtualDOM>
{/* about VirtualDOM end*/}


{/* about higher-order-component start*/}
//about higher-order-component-07
<HigherOrderComponent></HigherOrderComponent>
{/* about higher-order-component end*/}



{/* about custom-Hooks start*/}
//about reacthooks-06
<CustomHooks></CustomHooks>

{/* about custom-Hooks end */}


{/* about reactHooks start*/}
//about reacthooks-05
<ReactHooks></ReactHooks>

{/* about reactHooks end */}


//movie componentApp-04
 <MovieComponent></MovieComponent>

{/* about component start */}
 //about component-03
 <h3>component is a plain old js function</h3>
 <ul>
  <li>the function must return something.</li>
  <li>the something is the "jsx".</li>
  <li>the component may have data private to itself, we call it "State".</li>
  <li>the component may have data to share with other components , we call them "Props".</li>
 </ul>



{/* about component end */}




{/* my pets app start */}
//mypetsApp-02
<div className="App">
<h1>My Pets {pets.length}</h1>
<ul className="container">
  {
    pets.map( (pet, index)=>{
      return <li key={index}>
        <h2>{pet.name}</h2>
        <p>{pet.description}</p>
        <img src={ pet.image } 
        alt={pet.name} 
        width='100px'
        height='100px'       
        />
        <ul className="skills">
          {
          pet.skills.map((skill)=>{
            return <li key={skill}>{skill}</li>
          })
        }
        </ul>
      </li>
    })
  }
</ul>
</div>
{/* my pets app end */}


//about jsx-01
<div>

  <h1>{topic} is awesome</h1>
  <h2>{likes}</h2>
  {/* to print boolean need casting */}
  <h2>{String(true)}</h2>

{/* we cant direct use if-else in jsx use ternary instead of if-else*/}

{/* {
  false?
    <h3>test</h3>
  :
    <h3>testasd</h3>

} */}

{/* loops are not works on jsx , instead of this we can use map method */}

{
  likes.map((like )=> {
    let likes = like+"M"
    for(let i = 0; i<likes.length; i++){
      let output = likes+2
      return <h3 key={like}>I like {output}</h3>
    }
       
  })
}

{/*so, everything in jsx allowed/evaluate as value */}




</div>
</>

)

  
}

export default App
