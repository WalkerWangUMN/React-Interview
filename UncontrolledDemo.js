import React from 'react'

/** 函数组件
 * 纯函数 输入props 输入JSX
 * 没有实例 没有生命周期 没有state
 * 不能扩展其他方法
 */

/** 非受控组件
 * ref
 * defaultValue defaultChecked
 * 手动操作DOM元素
 */
/** 使用场景
 * 必须手动操作DOM元素 setState实现不了
 * 文件上次<input type='file'/>
 * 富文本编译器 需要传入DOM元素
 */
/** 受控组件vs非受控组件
 * 优先使用受控组件 符合React设计原理
 * 必须操作DOM 使用非受控组件
 */
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: 'ZW', flag: 'true'}
        this.nameInputRef = React.createRef() //创建ref
        this.fileInputRef = React.createRef()
    }
    render() {
        // input defaultValue
        return (
            <div>
                {/** 使用defaultValue而不是value 使用ref*/}
                <input defaultValue = {this.state.name} ref = {this.nameInputRef}/>
                {/** state并不会随着改变 */}
                <span>state.name: {this.state.name}</span>
                <br/>
                <button onClick={this.alertName}>alert name</button>
            </div>
        )
        // checkbox defaultChecked
        return <div>
            <input type='checkbox' defaultChecked={this.state.flag}/>
        </div>
        // file
        return <div>
            <input type='file' ref={this.fileInputRef}/>
            <button onClick={this.alertFile}>alert file</button>
        </div>
    }
    alertName = () => {
        const elem = this.nameInputRef.current // 通过ref获取DOM节点
        alert(elem.value) // 不是this.state.name
    }
    alertFile = () => {
        const elem = this.fileInputRef.current // 通过ref获取DOM节点
        alert(elem.files[0].name)
    }
}

export default App