class TodoStore {
	constructor() {
		this.todos = []
	}

	get completedTodosCount() {
		return this.todos.filter(todo => todo.completed === true).length;
	}

	addTodo(title) {
		let todo = {
			id: Math.random(),
			title: title,
			completed: false
		}

		this.todos.push(todo);
	}

	report() {
		if (this.todos.length === 0) {
			return 'none'
		}

		return `Next todo "${this.todos[0].title}". ` +
		`Progress: ${this.completedTodosCount}/${this.todos.length}`
	}
}

const todoStore = new TodoStore;

console.log(todoStore);