import React from 'react'
import ReactDOM from 'react-dom'

/** Portals
 * 组件默认会按照层级嵌套渲染
 */
/** Portals使用场景
 * overflow: hidden
 * 父组件z-index值太小
 * fixed要放在body第一层级
 */
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: 'ZW'}
    }
    render() {
        // 正常渲染
        return (
            <div className='modal'>
                {this.props.children}
            </div>
        )
        // 使用Portals渲染到body上
        // fixed元素要放在body上 有更好的浏览器兼容性
        return ReactDOM.createPortal(
            <div className='modal'>{this.props.children}</div>,
            document.body //  DOM节点
        )   
    }
}

export default App

// .modal {
//     position: fixed;
//     width: 300px;
//     height: 100px;
//     top: 100px;
//     left: 50%;
//     margin-left: -150px;
//     background-color: #000;
//     /* opacity: .2; */
//     color: #fff;
//     text-align: center;
// }