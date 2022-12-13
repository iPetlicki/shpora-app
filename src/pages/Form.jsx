import React from 'react';
import '../style/Content.css'
import MyForm from "../components/MyForm";

const Form = () => {
    return (
        <div className='content'>
            <h2>Работа с формами</h2>
            <p>В React мы можем использовать все стандартные элементы форм, которые есть в html, однако здесь эти элементы приобретают дополнительные возможности. Рассмотрим, как работать с формами в React.</p>
            <pre>
                <code>
                    {`  
                class UserForm extends React.Component {
                    constructor(props) {
                        super(props);
                        this.state = {name: ""};
                        this.onChange = this.onChange.bind(this);
                        this.handleSubmit = this.handleSubmit.bind(this);
                    }
              
                    onChange(e) {
                        let val = e.target.value;
                        this.setState({name: val});
                    }
              
                    handleSubmit(e) {
                        e.preventDefault();
                        alert("Имя: " + this.state.name);
                    }
              
                    render() {
                        return (
                            <form onSubmit={this.handleSubmit}>
                              <div>
                                <label>Имя:</label><br />
                                <input type="text" value={this.state.name} onChange={this.onChange}/>
                              </div>
                              <input type="submit" value="Отправить" />
                            </form>
                        );
                    }
                }
                    `}
                </code>
            </pre>
            <MyForm />
            <p>Чтобы контролировать введенные значения, в конструкторе устанавливается объект state:</p>
            <pre>
                <code>
                    {`  
                    this.state = {name: ""};
                    `}
                </code>
            </pre>
            <p>При определении поля ввода каждое поле связывается с определенным значением в state:</p>
            <pre>
                <code>
                    {`  
                    <input type="text" value={this.state.name} onChange={this.onChange} />
                    `}
                </code>
            </pre>
            <p>Так, источником значения для поля ввода имени является объект this.state.name.</p>
            <p>Для отслеживания изменений в поле ввода нам надо определить обработчик для события change с помощью атрибута onChange. Этот обработчик будет срабатывать при каждом нажатии клавиши клавиатуры. Если мы не определим для поля подобный обработчик, то это поле ввода будет доступно только для чтения.</p>
            <p>Суть каждого обработчика заключается в изменении значений в this.state:</p>
            <pre>
                <code>
                    {`  
                    onChange(e) {
                        var val = e.target.value;
                        this.setState({name: val});
                    }
                    `}
                </code>
            </pre>
            <p>С помощью e.target.value получаем введенное значение. После обновления новое значение this.state.name отобразится в поле ввода.</p>

        </div>
    );
};

export default Form;