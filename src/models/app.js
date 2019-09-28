import {getNews} from '../request'

export default {
  namespace: 'app',

	state: {
    name: 'app',
    data: []
  },

  effects: {
    *save({ payload: todo }, { put, call }) {
      // Call saveTodoToServer, then trigger `add` action to save data
      const res = yield call(getNews)
      yield put({ type: 'add', payload: res.data });
    },
  },

  reducers: {
    add(state, { payload: data }) {
      // Save data to state
      return {...state, news: data}
    },
  },

  subscriptions: {
  },
}