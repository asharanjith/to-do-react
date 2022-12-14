import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

class TodoItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  componentWillUnmount() {
    console.log('Cleaning up...');
  }

  handleEditing = () => {
    this.setState({ editing: true });
  }

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const viewMode = {};
    const editMode = {};
    const { editing } = this.state;

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    const {
      todo, handleChangeProps, deleteTodoProps, setUpdate,
    } = this.props;
    const { completed, id, title } = todo;
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
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
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={title}
          onChange={(e) => { setUpdate(e.target.value, id); }}
          onKeyDown={this.handleUpdatedDone}
        />

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
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
