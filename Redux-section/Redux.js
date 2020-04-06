/** Redux基本概念
 * store state
 * action: 传递数据
 * reducer: 接受action 返回新的state
 */

/** 单项数据流
 * dispatch(action)
 * reducer -> newState
 * subscribe触发通知
 *  ↓——————————————————————————————————————————|
 *  View -> Action -> Dispatch -> Reducer -> State
 *           ↑——Middleware——|
 */
// 同步action
export const addTodo = text => {
    // 返回action对象
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

/** redux进行异步请求
 * 使用异步action: 在异步中 dispatch action
 * redux-thunk
 */
// 异步action
export const addTodoAsync = text => {
    // 返回函数 其中有dispatch参数
    return (dispatch) => {
        // ajax异步获取数据
        fetch(url).then(res => {
            // 执行异步action
            dispatch(addTodo(res.text))
        })
    }
}

/** redux中间件 */
import {applyMiddleware, createStore} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
const logger = createLogger();
const store = createStore(
    reducer,
    applyMiddleware(thunk, logger) // 按顺序执行
)
// redux中间件-logger实现
// 修改dispatch 增加logger
let next = store.dispatch;
store.dispatch = function dispatchAndLog(action) {
    console.log('dispatching', action);
    next(action);
    console.log('next state', store.getState());
}

/** react-redux
 * <Provider>: 从最外部封装了整个应用 向connect传递store
 * connect: state和action通过props传到原组件中 监听store tree变化 使其包装的原组件可以响应state变化
 * mapStateToProps mapDispatchtToProps
 */

/** React-router
 * 路由模式(hash H5 history)
 * 路由配置(动态路由 懒加载)
 */
/** React-router配置懒加载 
 * Route里配置path component <Route exact path='/' component={Home}/>
 * 配合异步加载组件React.lazy React.Suspense 
*/
