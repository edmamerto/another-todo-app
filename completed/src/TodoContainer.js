import React, { Component } from 'react'
import Notes from './Notes'

class TodoConatiner extends Component {
	constructor(props) {
		super(props)
		this.state = {
			notes: [
				{
					id: 33,
					note: "Call Lisa"
				},
				{
					id: 34,
					note: "Email John"
				},
				{
					id: 35,
					note: "Order printer ink"
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

export default TodoConatiner