import { autorun, observable, computed } from 'mobx';


class CounterStore {
	constructor() {
		autorun(() => this.report)
	}
	@observable count = 0

	@computed get report() {
		console.log(`Counter from counterStore = ${this.count}`)
	}
}
window.counterStore = new CounterStore;
export default counterStore