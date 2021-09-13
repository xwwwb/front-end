import React, { Component } from 'react'
// import './App.css'
import Search from './Search'
import List from './List'
export default class App extends Component {
	 render() {
			return (
				 <div>
						<div className="container">
							 <Search cleanErr={this.cleanErr}  updateAppState={this.updateAppState}/>
								<List users={this.state} />
						</div>
				 </div>
			)
	 }
}
