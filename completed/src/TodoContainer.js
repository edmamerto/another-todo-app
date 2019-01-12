import React, { Component } from 'react'
import Notes from './Notes'

class TodoContainer extends Component {
	constructor(props) {
		super(props)
		this.updateEditingState = this.updateEditingState.bind(this)
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

	updateEditingState(i) {
        const bool = !this.state.notes[i].is_editing
		this.setState(prevState => ({
			notes: prevState.notes.map(
				note => (note.id !== i) ? note : {...note, is_editing: bool}
			)
		}))
	}

	render() {
		return (
			<Notes
				notes={this.state.notes}
				updateEditingState={this.updateEditingState}
			/>
		)
	}
}

export default TodoContainer