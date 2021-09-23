import React,{Component} from "react";
//样式模块化
import hello from './index.module.css'
export default class Hello extends Component{
    render() {
        return(
            <h2 className={hello.title}>Hello World</h2>
        )
    }
}
