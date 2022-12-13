import React from 'react';
import '../style/Content.css'

const Props = () => {
    return (
        <div className='content'>
            <h2>Props</h2>
            <p>Props представляет коллекцию значений, которые ассоциированы с компонентом. Эти значения позволяют создавать динамические компоненты, которые не зависят от жестко закодированных статических данных.</p>
            <p>Функциональный подход:</p>
            <pre>
                <code>
                    {`  
                    function Hello(props) {
                      return (
                          <div>
                               <p>Имя: {props.name}</p>
                               <p>Возраст: {props.age}</p>
                          </div>;
                      )
                    }
                    `}
                </code>
            </pre>
            <p>Параметр props, который передается в функцию компонента, инкапсулирует свойства объекта. В частности, свойство name и age. При рендеринге мы можем создать набор компонентов Hello, но передать в них разные данные для name и age. И таким образом, получим набор однотипной разметки html, наполненной разными данными.</p>
            <p>Использование классов:</p>
            <pre>
                <code>
                    {`  
                    class Hello extends React.Component {
                        render() {
                            return (
                                <div>
                                    <p>Имя: {this.props.name}</p>
                                    <p>Возраст: {this.props.age}</p>
                                </div>;
                            ) 
                        }
                    }                           
                    `}
                </code>
            </pre>
            <p>Класс компонента также извне получает объект свойств, который доступен через this.props.</p>
            <p>Используем компонент Hello</p>
            <pre>
                <code>
                    {`  
                     ReactDOM.createRoot(
                     document.getElementById("app")
                     )
                     .render(
                        <Hello name="Tom" age="33" />
                     );
                    `}
                </code>
            </pre>
            <p>При рендеринге React передает значения атрибутов в виде единого объекта "props". То есть значение из атрибута name="Tom" перейдет в свойство props.name.</p>
            <h3>Значения по умолчанию</h3>
            <p>Мы можем определить для свойств значения по умолчанию на тот случай, если их значения не передаются извне.</p>
            <p>Если мы применяем классы, то для установки значений применяется статическое свойство defaultProps:</p>
            <pre>
                <code>
                    {`  
                    class Hello extends React.Component {
                        render() {
                            return (
                                <div>
                                    <p>Имя: {this.props.name}</p>
                                    <p>Возраст: {this.props.age}</p>
                                </div>
                            ) 
                        }
                    }
                    Hello.defaultProps = {name: "Tom", age: 22};          
                    `}
                </code>
            </pre>
            <p>При функциональном определении компонента также применяется свойство defaultProps:</p>
            <pre>
                <code>
                    {`  
                    function Hello(props) {
                      return (
                          <div>
                               <p>Имя: {props.name}</p>
                               <p>Возраст: {props.age}</p>
                          </div>
                      )
                    }
                    Hello.defaultProps = {name: "Tom", age: 22};
                    `}
                </code>
            </pre>
            <h3>Обновление props</h3>
            <p>Сам this.props представляет неизменяемый объект, который предназначен только для чтения. Поэтому не следует его изменять</p>
            <p>Если же надо время то времени изменять какие-то внутренние данные компонента, то для хранения таких данных в React предназначен объект state, который будет рассмотрен далее.</p>
        </div>
    );
};

export default Props;