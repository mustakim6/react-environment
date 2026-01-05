import React from 'react';
import ParentCompnent from './ParentCompnent';

const ReactMemo = () => {
    return (
        <div>
            <h3><u>React Memo</u></h3>
            <h4>
                Memoized means: <br />

A value or function result is cached so it doesn’t need to be recalculated.

Used in programming, especially in React and algorithms. <br />

Examples <br />
React.memo → memoized component <br />

useMemo → memoized value <br />

useCallback → memoized function <br />
</h4>

<h5>

<h3><u>Memoization: React.memo( ChildComponent )</u></h3>
Memoization is a technique to optimize computer programs by caching the results of expensive function calls and returning it for the same input.

</h5>


<ParentCompnent></ParentCompnent>

            



        </div>
    );
};

export default ReactMemo;