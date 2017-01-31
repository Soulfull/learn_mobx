import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Counter extends Component {
	increment() {
		this.props.store.count++;
	}

	decrement() {
		this.props.store.count--;
	}

	render() {
		var count = this.props.store.count;

		return (
			<div>Counter: {count}
			<button onClick={this.increment.bind(this)}>+</button>
			<button onClick={this.decrement.bind(this)}>-</button>
			</div>
		)
	}
}

export default Counter