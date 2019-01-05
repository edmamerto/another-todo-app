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
				<Button bsStyle="link" bsSize="xsmall">edit</Button>
				<Button bsStyle="primary" bsSize="xsmall">done</Button>
			</div>
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
									{this.renderForm()}
								</Panel.Body>
								<Panel.Footer>
									{this.renderEditDoneButtons()}
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