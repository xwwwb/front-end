import React, { Component } from 'react'
import {Button,DatePicker} from 'antd'
import  './App.css'
import {WechatOutlined} from '@ant-design/icons'
export default class App extends Component {
	onChange=(date,datestring)=>{
console.log(date,datestring)
	}
	render() {
		return (
			<div style={{margin:'10px'}}>
			   <Button type="primary">Primary Button</Button>
				 <WechatOutlined/>
				 <DatePicker onChange={this.onChange}/>
			</div>
		)
	}
}
