/*
 * @Author: zhanghao23
 * @LastEditors  : zhanghao23
 * @Description: memoize和尾递归优化性能
 */
import React, {PureComponent} from 'react'

class PureComp  extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      count: 0,
      a: {
        name: 'zh'
      }
    }
  }

//   componentDidMount() {
//     const {a: name} = this.state
//     const newName = name
//     setTimeout(() => {
//       this.setState({
//         a: {
//             name: newName
//         }
//       })
//     }, 2000)
//   }
  handleClick = () => {
    let { items } = this.state;
    // items.push("1231");
    items = items.concat('122')
    this.setState({ items });
  }

  render() {
    // const {count} = this.state
    console.log(this.state.items);
    return(
    <div>
        <button onClick={this.handleClick}>点我</button>
    </div>
    )
  }
}

export default PureComp