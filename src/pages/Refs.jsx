import React from 'react';
import '../style/Content.css'

const Refs = () => {
    return (
        <div className='content'>
            <h2>Refs</h2>
            <h4>Refs (далее просто «ссылки») предоставляет способ доступа к DOM-узлам или React-элементам, созданным в методе render().</h4>
            <h4>Есть несколько хороших примеров использования ссылок:</h4>
            <ul>
                <li>Управление фокусом, выделение текста или воспроизведение медиаресурсами.</li>
                <li>Выполнение анимаций в императивном подходе.</li>
                <li>Интеграция со сторонними библиотеками, взаимодействующие с DOM.</li>
            </ul>
            <p>Ссылки создаются с использованием React.createRef() и добавляются к React-элементам с помощью атрибута ref. Ссылки обычно присваиваются свойству экземпляра, когда компонент создаётся таким образом, чтобы на них можно было ссылаться по всему компоненту.</p>
            <pre>
                <code>
                    {`  
                    class MyComponent extends React.Component {
                    constructor(props) {
                        super(props);
                         this.myRef = React.createRef();
                        }
                        render() {
                         return <div ref={this.myRef} />;
                        }
                    }
                    `}
                </code>
            </pre>
            <p>В функциональных компонентах используется хук useRef:</p>
            <pre>
                <code>
                    {`  
                    import { useRef } from 'react';

                    function MyComponent () {
                        const refContainer = useRef(initialValue);
                        return (
                            <div ref={refContainer} />
                        );
                    }
                    `}
                </code>
            </pre>
            <p>useRef возвращает изменяемый ref-объект, свойство .current которого инициализируется переданным аргументом (initialValue). Возвращённый объект будет сохраняться в течение всего времени жизни компонента.</p>
        </div>
    );
};

export default Refs;