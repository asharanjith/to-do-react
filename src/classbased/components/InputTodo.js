import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange= (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

    handleSubmit = (e) => {
      e.preventDefault();
      const { title } = this.state;
      const { addTodoProps } = this.props;
      if (title.trim()) {
        addTodoProps(title);
        this.setState({
          title: '',
        });
      } else {
        alert('Please write item');
      }
    };

    render() {
      const { title } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add todo..."
            value={title}
            onChange={this.onChange}
            name="title"
            className="input-text"
          />
          <button type="submit" className="input-submit">Submit</button>
        </form>
      );
    }
}

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
