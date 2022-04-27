import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
export default function Home() {
  const [sum, setSum] = useState(1)

  return (
    <div>
      <h3>我是Home的内容</h3>
      {/* Navigate一旦渲染就会跳转 replace指定是push还是replace模式 */}
      <h4>当前sum的值为：{sum === 2 ? <Navigate to="/about" replace={true} /> : sum}</h4>
      <button onClick={() => { setSum(2) }}>点我将sum变为2</button>
    </div>


  )
}
