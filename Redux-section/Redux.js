/** Redux基本概念
 * store state
 * action: 传递数据
 * reducer: 接受action 返回新的state
 */

/** 单项数据流
 * dispatch(action)
 * reducer -> newState
 * subscribe触发通知
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

/** React-router
 * 路由模式(hash H5 history)
 * 路由配置(动态路由 懒加载)
 */