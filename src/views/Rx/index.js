/*
 * @Author: zhanghao23
 * @LastEditors  : zhanghao23
 * @Description: memoize和尾递归优化性能
 */
import React, {Component} from 'react'
import { of } from 'rxjs/observable/of'; 
import { map, filter } from 'rxjs/operators';

class Rx  extends Component {
  componentDidMount() {
    const source$ = of(1, 2, 3); 
    const result$ = source$.pipe( 
        filter((x) => x % 2 === 0),
        map(x => x * x) 
    );
    result$.subscribe(console.log);
  }
  render() {
    return(
      <div>
          Rx
      </div>
    )
  }
}

export default Rx