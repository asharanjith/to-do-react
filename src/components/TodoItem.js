import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

class TodoItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const { todo, handleChangeProps, deleteTodoProps } = this.props;
    const { completed, id, title } = todo;
    return (
      <li className={styles.item}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button
          type="button"
          onClick={() => deleteTodoProps(id)}
        >
          Delete
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
