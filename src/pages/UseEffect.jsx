import React from 'react';
import '../style/Content.css'

const UseEffect = () => {
    return (
        <div className='content'>
            <h2>UseEffect</h2>
            <pre>
                <code>
                    {`  
                    import {useEffect} from 'react';
                    `}
                </code>
            </pre>
            <p>Хук позволяет использовать 3 метода жизненного цикла:</p>
            <ul>
                <li>componentDidMount()</li>
                <li>componentDidUpdate(prevProps, prevState)</li>
                <li>componentWillUnmount()</li>
            </ul>
            <p>UseEffect принимает в качестве первого параметра функцию, в качестве второго - [ ] (аналог componentDidMount).</p>
            <pre>
                <code>
                    {`  
                    useEffect ( () => { }, [])
                    `}
                </code>
            </pre>
            <p>UseEffect принимает в качестве первого параметра функцию, в качестве второго - массив с зависимостью (или несколькими) (аналог componentDidUpdate).</p>
            <pre>
                <code>
                    {`  
                    useEffect ( () => { }, [name])
                    `}
                </code>
            </pre>
            <p>UseEffect принимает в качестве первого параметра функцию, второго параметра - нет (аналог componentDidMount + componentDidUpdate).</p>
            <pre>
                <code>
                    {`  
                     useEffect ( () => { } )
                    `}
                </code>
            </pre>
            <p>UseEffect принимает в качестве первого параметра функцию, которая возвращает другую функцию (аналог componentWillUnmount).</p>
            <pre>
                <code>
                    {`  
                    useEffect ( () => {
                        return () => {};
                    })
                    `}
                </code>
            </pre>
        </div>
    );
};

export default UseEffect;