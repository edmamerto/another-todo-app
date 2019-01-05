import React, { Component } from 'react'
import { 
	Panel, 
	Grid, 
	Row, 
	Col, 
	Button, 
	FormGroup,
	FormControl
} from 'react-bootstrap'

class Notes extends Component {
	constructor(props) {
		super(props)
		this.renderForm = this.renderForm.bind(this)
		this.renderEditDoneButtons = this.renderEditDoneButtons.bind(this)
		this.renderPlaceholder = this.renderPlaceholder.bind(this)
		this.edit = this.edit.bind(this)
		this.state = {
			isEditing: false
		}
	}

	edit() {
		this.setState({
			isEditing: true
		})
	}

	renderForm() {
		return (
		    <FormGroup controlId="formControlsTextarea">
		      <FormControl componentClass="textarea" placeholder="textarea" />
		    </FormGroup>
		)
	}

	renderEditDoneButtons() {
		return (
			<div>
				<Button onClick={this.edit} bsStyle="link" bsSize="xsmall">edit</Button>
				<Button bsStyle="primary" bsSize="xsmall">done</Button>
			</div>
		)
	}

	renderSaveButton() {
		return (
			<div>
				<Button bsStyle="success" bsSize="xsmall">save</Button>
			</div>
		)
	}

	renderPlaceholder() {
		return (
			<p> Placeholder </p>
		)
	}

	render() {
		return (
			<div>
				<Grid>
					<h1>To Do</h1>
				</Grid>
				<Grid>
					<Row>
						<Col xs={6} md={4}>
							<Panel>
								<Panel.Body>
									{this.state.isEditing ? this.renderForm() : this.renderPlaceholder()}
								</Panel.Body>
								<Panel.Footer>
									{this.state.isEditing ? this.renderSaveButton() : this.renderEditDoneButtons()}
								</Panel.Footer>
							</Panel>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default Notes