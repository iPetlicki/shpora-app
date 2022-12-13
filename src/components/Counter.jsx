import React from 'react';
import {useState} from 'react';
import '../style/Counter.css'


function Counter() {
    let [count, setCount] = useState(0);

    return <div className='counter'>
        <span>{count}</span>
        <button className='counter-btn' onClick={() => setCount(count + 1)}>+</button>
    </div>;
}

export default Counter;
