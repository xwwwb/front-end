import React, { Component } from 'react'
// import './App.css'
import Search from './Search'
import List from './List'
export default class App extends Component {
	state={
		users:[]
	}
	saveUsers=(users)=>{
		this.setState({users:users})
	}
	 render() {
			return (
				 <div>
						<div className="container">
							 <Search saveUsers={this.saveUsers}/>
								<List users={this.state.users} />
						</div>
				 </div>
			)
	 }
}
