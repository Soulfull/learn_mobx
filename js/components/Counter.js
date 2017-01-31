import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools'

@observer
class Counter extends Component {
	increment() {
		this.props.store.increment();
	}

	decrement() {
		this.props.store.decrement();
	}

	render() {
		var count = this.props.store.count;

		return (
			<div>
			<DevTools/>
			Counter: {count}
			<button onClick={this.increment.bind(this)}>+</button>
			<button onClick={this.decrement.bind(this)}>-</button>
			</div>
		)
	}
}

export default Counter