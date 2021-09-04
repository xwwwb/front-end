//这里的Component不是结构赋值 是分别暴漏 说明 react采用了多种暴漏方式
import React,{Component} from "react";
import Hello from './components/Hello'
class App extends Component{
    render() {
        return(
            <div>
                <Hello/>
            </div>
        )
    }
}
export default App
