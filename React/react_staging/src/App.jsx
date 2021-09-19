import React, { Component } from 'react'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							<a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								??
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
