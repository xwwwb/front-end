import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
export default class Search extends Component {
   search = ()=>{
      console.log(this.keyWordElement)
      //下面函数存在疑问 为什么清空了err改变了state 却没有触发render
      this.props.cleanErr()
      // 连续解构赋值并重命名
      const {keyWordElement:{value:keyWord}} = this
      console.log(keyWord)
      this.props.updateAppState({isFirst:false,isLoading:true})
      axios.get(`/api1/search/users?q=${keyWord}`).then(
         response =>{console.log(response.data)
            this.props.updateAppState({isLoading:false,users:response.data.items})
        
         },
         error =>{console.log(error)
            // 要存错误对象的一个属性 不能存整个对象 不然无法解析
             //https://www.g2i.co/blog/understanding-the-objects-are-not-valid-as-a-react-child-error-in-react
            this.props.updateAppState({isLoading:false,err:error.message})
         }
         
      )
   }
   render() {
      return (
         <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
               <input ref={c=>this.keyWordElement=c} type="text" placeholder="enter the name you search" />&nbsp;
               <button onClick={this.search}>Search</button>
            </div>
         </section>
      )
   }
}
