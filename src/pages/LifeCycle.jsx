import React from 'react';
import '../style/Content.css'

const LifeCycle = () => {
    return (
        <div className='content'>
            <h2>Методы жизненного цикла</h2>
            <h4>Основные методы жизненного цикла:</h4>
            <p>1. constructor()</p>
            <ul>
                <li>Инициализация локального состояния путем присвоения объекта this.state.</li>
                <li>Привязка методов обработчика событий к экземпляру.</li>
            </ul>
            <pre>
                <code>
                    {`  
                     constructor(props) {
                        super(props);
                        this.state = { counter: 0 };
                        this.handleClick = this.handleClick.bind(this);
                     }
                    `}
                </code>
            </pre>
            <p>2. render()</p>
            <p>Рендеринг компонента. Отдает JSX.</p>
            <pre>
                <code>
                    {`  
                    render () {
                        return (
                            <div>
                                'Hello'
                            </div>
                        )
                    }
                    `}
                </code>
            </pre>
            <p>3. componentDidMount()</p>
            <p>componentDidMount() вызывается сразу после монтирования компонента (вставки в дерево). Используется для отправки запросов на серверк удаленным ресурсам, setTimeout, обращение к DOM-элементам.</p>
            <p>4. componentDidUpdate(prevProps, prevState)</p>
            <p>Вызывается после обновления компонента. В качестве парапметров передаются старые значения объектов: props и state.</p>
            <pre>
                <code>
                    {`  
                     componentDidUpdate(prevProps, prevState) {
                        if (this.props.userID !== prevProps.userID) {
                            this.fetchData(this.props.userID);
                        }
                     }       
                    `}
                </code>
            </pre>
            <p>5. componentWillUnmount()</p>
            <p>Вызывается перед удалением компонента из DOM. Используется для закрытия асинхронных запросов, таймеров.</p>
            <p>Для использования методов жизненного цикла в функциональных компонентах предназначек хук useEffect.</p>
        </div>
    );
};

export default LifeCycle;