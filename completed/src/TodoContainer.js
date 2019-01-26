import React, { Component } from 'react'
import Notes from './Notes'

class TodoContainer extends Component {
	constructor(props) {
		super(props)
		this.updateEditingState = this.updateEditingState.bind(this)
		this.updateTodo = this.updateTodo.bind(this)
		this.remove = this.remove.bind(this)
		this.add = this.add.bind(this)
		this.state = {
			notes: [
				{
					id: 0,
					note: "Call Lisa",
					is_editing: false
				},
				{
					id: 1,
					note: "Email John",
                    is_editing: false
				},
				{
					id: 2,
					note: "Order printer ink",
                    is_editing: false
				}
			]
		}
	}

	nextId() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
	}

	add(text) {
		this.setState(prevState => ({
			notes: [
				...prevState.notes,
				{
					id: this.nextId(),
					note: text
				}
			]
		}))
	}

	updateTodo(text, i) {
		this.setState(prevState => ({
			notes: prevState.notes.map(
				note => (note.id !== i) ? note : {...note, note: text}
			)
		}))
	}

	updateEditingState(i) {
        const bool = !this.state.notes[i].is_editing
		this.setState(prevState => ({
			notes: prevState.notes.map(
				note => (note.id !== i) ? note : {...note, is_editing: bool}
			)
		}))
	}

	remove(id) {
		var array = [...this.state.notes]
	    array.splice(id, 1)
	    this.setState({notes: array})
	}

	render() {
		return (
			<div>
				<Notes
					notes={this.state.notes}
					updateEditingState={this.updateEditingState}
					onChange={this.updateTodo}
					onRemove={this.remove}
					add={this.add.bind(null, "New Note")}
				/>
			</div>
		)
	}
}

export default TodoContainer