import React from 'react'
import Test from '@/components/test'

export default class First extends React.Component {
  constructor() {
    super()
    this.state = {
      CommentList: [
        { id: 1, user: '张三', content: '哈哈，沙发' },
        { id: 2, user: '李四', content: '哈哈，板凳' },
        { id: 3, user: '王五', content: '哈哈，凉席' },
        { id: 4, user: '赵六', content: '哈哈，砖头' },
        { id: 5, user: '田七', content: '哈哈，楼下山炮' }
      ]
    }
  }
  render(){
    return <div>
      <h2>我是列表</h2>

      { this.state.CommentList.map(item => <Test {...item} key={item.id} />) }
    </div>
  }
}