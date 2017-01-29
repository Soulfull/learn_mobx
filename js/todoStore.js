import mobx, { observable, computed } from 'mobx'

class TodoStore {
	constructor() {
		mobx.autorun(() => console.log(this.report));
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
			id: Math.random(),
			title: title,
			completed: false
		}

		this.todos.push(todo);
	}
}

const todoStore = new TodoStore;

console.log(todoStore);