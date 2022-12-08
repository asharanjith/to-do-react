import React from 'react';
import propTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      todos, handleChangeProps, deleteTodoProps, setUpdate,
    } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            setUpdate={setUpdate}

          />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      completed: propTypes.bool.isRequired,
    }),
  ).isRequired,
  handleChangeProps: propTypes.func.isRequired,
  deleteTodoProps: propTypes.func.isRequired,
  setUpdate: propTypes.func.isRequired,
};

export default TodosList;
