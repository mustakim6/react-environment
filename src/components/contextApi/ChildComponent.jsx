import React, { useContext } from 'react';
import InfoContext from './context/InfoContext';
import '../../App'
import GrandSon from './GrandSon';
import GrandDaughter from './GrandDaughter';

const ChildComponent = () => {
    const {familyName, onlyChildrenKnow} = useContext(InfoContext)
    return (
        <div className='border'>
            <h2>Child Component</h2>
            <h5>{familyName}</h5>
            <h5>{onlyChildrenKnow()}</h5>
            <GrandSon></GrandSon>
            <GrandDaughter></GrandDaughter>
        </div>
    );
};

export default ChildComponent;