import React, { useContext } from 'react';
import '../../App'
import InfoContext from './context/InfoContext';
const GrandDaughter = () => {
        const {onlyChildrenKnow} = useContext(InfoContext)

    return (
        <div className='border'>
            <h2>GrandDaughter</h2>
            <h5>{onlyChildrenKnow()}</h5>
        </div>
    );
};

export default GrandDaughter;