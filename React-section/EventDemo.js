import React from 'react'
/** event 
 * bind this
 * 关于event参数
 * 传递自定义参数
*/
class EventDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: 'ZS'}
        this.clickHandler1 = this.clickHandler1.bind(this) // 修改方法的this指向
    }
    render() {
        // this - 使用bind
        return <p onClick={this.clickHandler1}>
            {this.state.name}
        </p>
        // this - 使用静态方法
        return <p onClick={this.clickHandler2}>
            clickHandler2 {this.state.name}
        </p>
        // event
        return <a href="" onClick={this.clickHandler3}> click me </a>
        // 传递参数 - 使用bind{this, a, b}
        return <ul>{this.state.list.map((item, index) => {
            return <li key={item.id} onClick={this.clickHandler4.bind(this, item.id, item.title)}>
                index {index}; title{item.title}
            </li>
        })}</ul>
    }
    clickHandler1() {
        // console.log(this) // this默认是undefined
        this.setState({
            name: 'ZW'
        })
    }
    // 静态方法 this指向当前实例 不用修改方法的this指向
    clickHandler2 = () => {
        this.setState({
            name: 'ZW'
        })
    }
    // 获取event
    clickHandler3 = (event) => {
        event.preventDefault() // 阻止默认行为
        event.stopPropagation() // 阻止冒泡
        console.log(event.target) // 指向当前元素 即当前元素触发
        // event是React封装的 可以看 __proto__.constructor是SyntheticEvent 组合事件
        console.log(event) // 不是原生event 是原生的MouseEvent
        console.log(event._proto_.constructor)
        console.log(event.nativeEvent) // 原生event 其 __proto__.constructor是MouseEvent
        console.log(event.nativeEvent.target) // 指向当前元素 即当前元素触发
        console.log(event.nativeEvent.currentTarget) // 指向document

        /** event是SyntheticEvent 模拟出来DOM事件所有功能
         * event.nativeEvent是原生事件对象
         * 所有事件都被挂载到document上
         * 和DOM event Vue event不一样
         */
    }
    // 传递参数
    clickHandler4(id, title, event) {
        console.log(id, title)
        console.log(event) // 最后追加一个参数 即可接收 event
    }
}

export default EventDemo