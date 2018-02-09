import React, { Component } from 'react';

import { Tasks } from '../api/tasks.js';

// Task component - represents a single todo item
export default class Task extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this.props.task._id, {
      $set: { checked: !this.props.tasks.checked }
    });
  }

  deletThisTask() {
    Tasks.remove(this.props.tasks._id);
  }

  render() {
    // Give tasks a different className when they are checked off
    // so that we can style them nicely in css
    const taskClassName = this.props.tasks.checked ? 'checked' : '';

    return (
      <li className={taskClassName}>
        <button className='delete' onClick={this.deletThisTask.bind(this)}>
          &times;
        </button>

        <input
          type="checkbox"
          readOnly
          checked={!!this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}
        />

        <span className='text'>
          {this.props.task.text}
        </span>
      </li>
    );
  }
}
