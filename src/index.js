import {
  clearCompleted,
  editTodoList,
  formSubmission,
  populateTasks,
} from './module/addRemoveTask.js';
import './style.css';

const clearCompletedButton = document.getElementById('clear-completed');

clearCompletedButton.addEventListener('click', clearCompleted);

formSubmission();
editTodoList();
populateTasks();
