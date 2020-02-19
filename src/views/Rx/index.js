/*
 * @Author: zhanghao23
 * @LastEditors  : zhanghao23
 * @Description: memoize和尾递归优化性能
 */
import React, {Component} from 'react'
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/repeat';
// import 'rxjs/add/observable/interval';

// import { of } from 'rxjs/observable/of'; 
// import { range } from 'rxjs/observable/range'; 
// import { generate } from 'rxjs/observable/generate'; 
import { 
  Observable,
   Subject,
   asapScheduler,
   pipe,
   of,
   from,
   interval,
   timer,
   fromEvent,
   concat,
   merge,
   zip,
   range,
   combineLatest,
   race
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { 
  map,
  mapTo,
  withLatestFrom,
  repeatWhen,
  take,
  concatAll,
  mergeAll,
  switchMap,
  zipAll,
  exhaust,
  count,
  max,
  reduce,
  filter,
  first,
  last,
  takeLast,
  takeUntil,
  takeWhile,
  skip,
  skipWhile,
  skipUntil,
  skipLast,
  throttleTime,
  throttle,
  debounceTime,
  debounce,
} from 'rxjs/operators';

class Rx  extends Component {
  componentDidMount() {
    // const btn = document.querySelector('#btn')
    // const source$ = fromEvent(btn, 'click')
    const notifier = (notifica) => {
      return interval(1000)
    }
    // const original$ = timer(0, 1000);
    const source1$ = interval(500).pipe(
      take(2),
      mapTo('A')
    )    
    const source2$ = interval(1000).pipe(
      take(3),
      mapTo('B')
    )    
    const source3$ = interval(500).pipe(
      take(3),
      mapTo('C')
    )
 
    const result$ = concat(source1$, source2$, source3$).pipe(
      throttleTime(800)
    )
    result$.subscribe(
      console.log,
      err => console.log(err),
      console.log('complete')
    );
  }
  render() {
    return(
      <div>
          Rx
          <button id="btn">按钮</button>
      </div>
    )
  }
}

export default Rx