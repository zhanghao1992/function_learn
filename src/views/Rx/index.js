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
   race,
   subscribe,
} from 'rxjs';
// import { ajax } from 'rxjs/ajax';
import { 
  map,
  concatMap,
  mergeMap,
  switchMap,
  exhaustMap,
  // mapTo,
  // withLatestFrom,
  // repeatWhen,
  take,
  // concatAll,
  // mergeAll,
  // zipAll,
  // exhaust,
  // count,
  // max,
  // reduce,
  // filter,
  // first,
  // last,
  // takeLast,
  // takeUntil,
  // takeWhile,
  // skip,
  // skipWhile,
  // skipUntil,
  // skipLast,
  // throttleTime,
  // throttle,
  // debounceTime,
  // debounce,
  // auditTime,
  // audit,
  // sampleTime,
  // sample,
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  windowTime,
  windowCount,
  windowToggle,
  windowWhen,
  bufferTime,
  bufferCount,
  bufferToggle,
  bufferWhen,
  scan,
  mergeScan,
  refresh,
  multicast,
  refCount,
  publish,
  
} from 'rxjs/operators';
import { asap } from 'rxjs/scheduler/asap'
import { async } from 'rxjs/scheduler/async'
import { queue } from 'rxjs/scheduler/queue'

class Rx  extends Component {
  componentDidMount() {
    // const btn = document.querySelector('#btn')
    // const source$ = fromEvent(btn, 'click')
    const notifier = (notifica) => {
      return interval(1000)
    }
    // const original$ = timer(0, 1000);
    const source$ = range(1, 3, asap)

    console.log('before schedule'); 
    async.schedule(() => console.log('async')); 
    asap.schedule(() => console.log('asap')); 
    queue.schedule(() => console.log('queue')); 
    console.log('after schedule');


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