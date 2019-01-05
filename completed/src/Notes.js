import React, { Component } from 'react'
import { Panel, Grid, Row, Col, Button } from 'react-bootstrap'

class Notes extends Component {

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
								<Panel.Body>Basic panel example</Panel.Body>
								<Panel.Footer>
									<Button bsStyle="link" bsSize="xsmall">edit</Button>
									<Button bsStyle="primary" bsSize="xsmall">done</Button>
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