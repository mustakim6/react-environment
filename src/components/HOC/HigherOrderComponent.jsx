import React from 'react';


const ImBox = ({styles})=>{
    return <h1 style={styles}>Im Box with red border from HOC</h1>
}

const HigherOrderComponent = (WrappedComponent) => {
    
    return function EnhanchedImBox(){

        return (
        <div>

            <ul>
                <pre>const enhanced_Component = HOC( wrapped )</pre>
                <li><h3>A Higher Order Component (HOC) is like a wrapper that adds extra features to your React components.</h3></li>
                <li><h3>HOCs are functions that take a component and return an enhanced version of that component.Ist not a component.</h3></li>
            </ul>

        <WrappedComponent styles={{border:'2px solid red'}}></WrappedComponent>


        </div>
    );

    }
};


 export default HigherOrderComponent(ImBox);


