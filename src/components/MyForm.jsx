import React from 'react';
import '../style/MyForm.css'

class MyForm extends React.Component {
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
            <form className='my-form' onSubmit={this.handleSubmit}>
                <div>
                    <label>Введите имя:</label><br />
                    <input type="text" value={this.state.name} onChange={this.onChange}/>
                </div>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

export default MyForm;
