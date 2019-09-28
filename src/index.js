
import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading'
const createHistory = require("history").createHashHistory
// 1. Initialize
const app = dva({
    history: createHistory()
});
 
// 2. Plugins
app.use(createLoading());
 
// 3. Model
app.model(require('./models/app').default);
 
// 4. Router
app.router(require('./router').default);
 
// 5. Start
app.start('#root');