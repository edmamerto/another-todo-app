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
		this.renderNote = this.renderNote.bind(this)
		this.edit = this.edit.bind(this)
		this.save = this.save.bind(this)
		this.renderCard = this.renderCard.bind(this)
		this.remove = this.remove.bind(this)
		this.state = {
			isEditing: false
		}
	}

	edit(i) {
		this.props.updateEditingState(i)
	}

	save(i) {
        this.props.updateEditingState(i)
        this.props.onChange(this.textarea.value, i)
	}

	remove(i){
		this.props.onRemove(i)
	}

	renderForm(i) {
		return (
			<form onSubmit={this.save}>
				<FormGroup controlId="formControlsTextarea">
				  <FormControl inputRef={(ref) => {this.textarea = ref}} componentClass="textarea" placeholder="textarea" />
				  <Button onClick={() => this.save(i)} bsStyle="success" bsSize="xsmall" type="button">save</Button>
				</FormGroup>
			</form>
		)
	}

	renderEditDoneButtons(i) {
		return (
			<div>
				<Button onClick={() => this.edit(i)} bsStyle="link" bsSize="xsmall">edit</Button>
				<Button onClick={() => this.remove(i)} bsStyle="primary" bsSize="xsmall">done</Button>
			</div>
		)
	}

	renderNote(note) {
		return (
			<p> {note} </p>
		)
	}

	renderCard(note, i) {
		return (
			<Panel key={i}
				   index={i}>
				<Panel.Body>
					{
						note.is_editing ?
						this.renderForm(i) :
						this.renderNote(note.note)
					}
				</Panel.Body>
				<Panel.Footer>
					{
						note.is_editing ?
						true :
						this.renderEditDoneButtons(i)
					}
				</Panel.Footer>
			</Panel>
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
							{this.props.notes.map(this.renderCard)}
						</Col>
					</Row>
					<Button bsStyle="success" bsSize="xlarge" type="button">Add Note</Button>
				</Grid>
			</div>
		)
	}
}

export default Notes