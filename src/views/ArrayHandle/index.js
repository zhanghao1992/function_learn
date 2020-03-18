import React, { Component } from 'react'
import { Button} from 'antd'
export default class ArrayHandle extends Component {
  state = {
    list: [
      { id: 1, name: 'aaaaa'},
      { id: 2, name: 'bbbbb'},
      { id: 3, name: 'ccccc'},
    ]
  }
  delete = (e) => {
    console.log(e.target.dataset.id);
  }

  renderItem = (i) => {
    return (
      <li key={i.id}>
        <Button data-id={i.id} onClick={this.delete}>删除</Button>
        {i.name}
      </li>
    )
  }
  render() {
    return(
      <ul>
        { this.state.list.map(this.renderItem)}
      </ul>
    )
  }
}