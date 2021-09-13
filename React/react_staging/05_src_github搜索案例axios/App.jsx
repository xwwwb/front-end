import React, { Component } from 'react'
// import './App.css'
import Search from './Search'
import List from './List'
export default class App extends Component {
	state={
		users:[],
		isFirst:true,
		isLoading:false,
		err:''
	}
	updateAppState=(stateObj)=>{
		this.setState(stateObj)
	}
	cleanErr=()=>{
		this.setState({err:''})
	}
	 render() {
			return (
				 <div>
						<div className="container">
							 <Search updateAppState={this.updateAppState}/>
								<List users={this.state} cleanErr={this.cleanErr} />
						</div>
				 </div>
			)
	 }
}
