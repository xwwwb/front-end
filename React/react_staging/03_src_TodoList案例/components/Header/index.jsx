import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import './index.css'
export default class Header extends Component {
   static propTypes = {
      add:PropTypes.func.isRequired
   }
   handleKeyUp=(event)=>{
      const {keyCode,target}=event
      const {add}=this.props
      if(keyCode !==13) return
      if(keyCode ===13){
         if(target.value.trim() === '' ) {
         alert("输入不能为空") 
         return
         }
         add(event.target.value)
         //以下几行存在问题
         target.value=""
         //解构赋值是浅拷贝
         // let {value}=event.target
         // value=""
      }
      
   }
   render() {
      return (
         <div className="todo-header">
         <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
      )
   }
}
