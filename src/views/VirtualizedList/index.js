/*
 * @Author: zhanghao23
 * @LastEditors  : zhanghao23
 * @Description: memoize和尾递归优化性能
 */
import React, {Component} from 'react'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';
import 'react-virtualized/styles.css';

const data = Array.from({length: 500}).map((i, index) => ({
    key: index,
    value: '数据' + index,
}))
function renderItem( RowRendererParams) {
    const {index, key, style} = RowRendererParams
    return (
      <div key={key} style={style}>
        {data[index].value}
      </div>
    );
}
class VirtualizedList  extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'zhanghao23',
      count: 0
    }
  }

  render() {
    return(
        <div style={{ height: '500px', border: '1px solid #000'}}>
            {/* <div style={{ flex: '1 1 auto' }}> */}
                <AutoSizer>
                    {({ width, height }) => {
                        return (
                            <List
                                width={width}
                                height={height}
                                rowCount={data.length}
                                rowHeight={30}
                                rowRenderer={renderItem}
                            />
                        )
                    }
                    }
                </AutoSizer>
            {/* </div> */}
        </div>
    )
  }
}

export default VirtualizedList