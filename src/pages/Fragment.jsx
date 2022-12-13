import React from 'react';
import '../style/Content.css'

const Fragment = () => {
    return (
        <div className='content'>
            <h2>Фрагменты</h2>
            <h4>С помощью фрагментов можно сгруппировать список дочерних элементов без добавления дополнительных узлов в DOM.</h4>
            <p>Используем React.Fragment или выполняем импорт, чтобы использовать Fragment:</p>
            <pre>
                <code>
                    {`  
                    import { Fragment } from 'react'
                    `}
                </code>
            </pre>
            <p>Заменяем теги div на Fragment:</p>
            <pre>
                <code>
                    {`  
                    class ChildComponent extends React.Component {
                    render() {
                    return (
                        <Fragment>
                            <h1>Hello Child Component</h1>
                        </Fragment>
                            )
                        }
                    }
                    `}
                </code>
            </pre>
            <p>Существует сокращенная запись (импортировать не нужно):</p>
            <pre>
                <code>
                    {`  
                    class ChildComponent extends React.Component {
                    render() {
                    return (
                        <>
                            <h1>Hello Child Component</h1>
                        </>
                            )
                        }
                    }
                    `}
                </code>
            </pre>
            <p>Недостаток сокращенной записи: нельзя использовать атрибут key.</p>
        </div>
    );
};

export default Fragment;