import React from 'react'
/** setState
 * 不可变值
 * 可能是异步更新
 * 可能会被合并
 */

 // 函数组件 默认没有state
class StateDemo extends React.Component {
    constructor(props) {
        super(props)
        // 1. state要在构造函数中定义
        this.state = {
            count: 0
        }
    }
    render() {
    return <div>
        <p>{this.state.count}</p>
        <button onClick={this.increase}>increase</button>
    </div>
    }
     increase = () => {
        // 2. 不要直接修改state 使用不可变值
        // this.state.count ++ 错误
        this.setState({
            count: this.state.count + 1
        })
        // 操作数组 对象的常用形式

        // 3. setState可能是异步更新
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('count by callback', this.state.count) // 回调函数中可以拿到最新的state
        })
        console.log('count', this.state.count) // 异步的拿不到最新值
        // setTimeout中setState是同步的
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
            console.log('count in setTimeout', this.state.count)
        }, 0);
        
        // 4. state异步更新时 更新前会被合并
        // 传入对象 会被合并(类似Object.assign) 执行结果只有一次 +1
        this.setState({
            count: this.state.count + 1
        })
        this.setState({
            count: this.state.count + 1
        })
        this.setState({
            count: this.state.count + 1
        })
        // 传入函数 不会被合并 执行结构是 +3
        this.setState((prevState, props) => {
            return {
                count: prevState.count + 1
            }
        })
        this.setState((prevState, props) => {
            return {
                count: prevState.count + 1
            }
        })
        this.setState((prevState, props) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    bodyClickHandler = () => {
    this.setState({
        count: this.state.count + 1
    })
    console.log('count in body event', this.state.count)
    }
    componentDidMount() {
        // 定义的DOM事件 setState是同步的
        document.body.addEventListener('click', this.bodyClickHandler)
    }
    componentWillUnmount() {
        // 销毁自定义DOM事件
        document.body.removeEventListener('click', this.bodyClickHandler)
        // clearTimeout
    }
}

 export default StateDemo

 // 不可变值(函数式编程 纯函数) - 数组
 const list5Copy = this.state.list5.slice()
 list5Copy.splice(2, 0, 'a') // 中间插入/删除
 this.setState({
     list1: this.state.list1.concat(100), // 追加
     list2: [...this.state.list2, 100], // 追加
     list3: this.state.list3.slice(0, 3), // 截取
     list4: this.state.list4.filter(item => item > 100), // 筛选
     list5: list5Copy // 其他操作
 })
 // 不能直接对this.state.list进行push pop slice等 违反不可变值

 // 不可变值 - 对象
 this.setState({
     obj1: Object.assign({}, this.state.obj1, {a: 100}),
     obj2: {...this.state.obj2, a: 100}
 })
// 不能对this.state.obj进行属性设置 违反不可变值