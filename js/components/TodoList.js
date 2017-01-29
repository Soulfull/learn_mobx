import React, { Component } from 'react'
import Todo from './Todo'
import { observer } from 'mobx-react'

@observer
class TodoList extends Component {
	render() {
		const store = this.props.store;

		return (
			<ul>
				{store.todos.map(todo => <Todo title={todo.title} key={todo.id}/>)}
			</ul>
		)
	}
}

export default TodoList;