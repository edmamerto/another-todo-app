import React, { Component } from 'react'
import Notes from './Notes'

class TodoContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			notes: [
				{
					id: 33,
					note: "Call Lisa",
					is_editing: false
				},
				{
					id: 34,
					note: "Email John",
                    is_editing: false
				},
				{
					id: 35,
					note: "Order printer ink",
                    is_editing: false
				}
			]
		}
	}

	render() {
		return (
			<Notes notes={this.state.notes}/>
		)
	}
}

export default TodoContainer