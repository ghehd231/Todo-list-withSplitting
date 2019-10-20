import React, { Component } from 'react';

class CreateForm extends Component {
    state = {
        input : ''
    };
    handleChange = e => {
        this.setState({
            input: e.target.value
        });
    };
    
    handleSubmit = e => {
        e.preventDefault();
        this.state.input.trim() !=='' ? 
            this.props.onSubmit(this.state.input)
            : alert('값을 입력해 주세요!');
        this.setState({ input: '' });
    };

    render() {
        return (
            <form className="test" onSubmit={this.handleSubmit}>
            <input placeholder="오늘 뭐하지..?" onChange={this.handleChange} value={this.state.input}/>
            <button type="submit">추가</button>
          </form>
        );
    }
}

export default CreateForm;