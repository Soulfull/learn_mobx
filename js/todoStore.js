import {autorun, observable, computed } from 'mobx'
import TodoList from './components/TodoList'
import React from 'react'
import { render } from 'react-dom'

class TodoStore {
	constructor() {
		autorun(() => console.log(this.report));
	}

	@observable todos = []

	@computed get completedTodosCount() {
		return this.todos.filter(todo => todo.completed === true).length;
	}

	@computed get report() {
		if (this.todos.length === 0) {
			return 'none!!!'
		}

		return `Next todo "${this.todos[0].title}". ` +
		`Progress: ${this.completedTodosCount}/${this.todos.length}`
	}

	addTodo(title) {
		let todo = {
			id: 3 + Math.random() * 3,
			title: title,
			completed: false
		}

		this.todos.push(todo);
	}
}

window.todoStore = new TodoStore;

todoStore.addTodo('Learn Mobx');

render(<TodoList store={todoStore}/>, document.getElementById('root'));
