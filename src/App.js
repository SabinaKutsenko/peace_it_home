import React, { Component } from 'react';

import Counter from "./components/Counter/Counter";
import Display from "./components/Display/Display";
import NumberInput from "./components/NumberInput/NumberInput";

import TodoList from "./components/TodoList/TodoList";
import AddItemToList from "./components/AddItemToList/AddItemToList";

import './App.css';

class App extends Component {
	state = {
		number: 15,
		list: [],
		inputText: ""
	}

	componentDidMount() {
		this.setState({
			list: JSON.parse(localStorage.getItem(("list")) || [])
		});
	}

	componentDidUpdate() {
		localStorage.setItem("list", JSON.stringify(this.state.list));
	}

	onChangeNumberValue = (stirng) => {
		if (stirng === "+") {
			this.setState({
				number: this.state.number + 1
			});
		} else {
			this.setState({
				number: this.state.number - 1
			});
		}
	}

	onInputChange = (value) => {
		this.setState({
			number: +(value)
		});
	}

	/* ToDoList Functions start */
	onSaveBtnClick = () => {
		this.addElementToList({
			id: Date.now(),
			text: this.state.inputText
		});

		this.setState({
			inputText: ""
		});
	}

	onInputMenuChange = (event) => {
		this.setState({
			inputText: event.target.value
		});
	}

	addElementToList = (value) => {
		this.setState({
			list: [...this.state.list, value]
		});
	}

	deleteElem = (id) => {
		const remainder = this.state.list.filter((elem) => {
			if (elem.id !== id) {
				return elem;
			}
		});

		this.setState({
			list: remainder
		});
	}
	/* ToDoList Functions end */

	render() {
		const { number, list, inputText } = this.state;

		return (
			<div className="App">

				<Display number={number} />
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
				<div>
					<p>фывфывфыв</p>
					<Counter onChangeNumberValue={this.onChangeNumberValue} />
					<NumberInput number={number} onInputChange={this.onInputChange} />
				</div>

				<AddItemToList inputText={inputText} onSaveBtnClick={this.onSaveBtnClick} onInputChange={this.onInputMenuChange} />
				<TodoList addElementToList={this.addElementToList} deleteElem={this.deleteElem} list={list} />

			</div>
		);
	}
}

export default App;
