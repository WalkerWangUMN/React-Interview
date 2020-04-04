import React from 'react'
import PropTypes from 'prop-types'

class Mouse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {x: 0, y: 0}
    }
    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }
    render() {
        return (
            <div style={{height: '500px'}} onMouseMove={this.handleMouseMove}>
                    {/** 将当前state组为props 传递给render(render是一个函数组件) */}
                    {this.props.render(this.state)}
            </div>
        )
    }
}
Mouse.PropTypes = {
    render: PropTypes.func.isRequired // 必须接受一个render属性 而且是函数
}
const App = (props) => {
    <div style={{height: '500px'}}>
        <p>{props.a}</p>
        <Mouse render={
            /** render是一个函数组件 */
            ({x, y}) => <h1>The mouse position is ({x}, {y})</h1>
        }/>
    </div>
}
/**
 * 定义了Mouose组件 只有获取x y的能力
 * 通过render prop的方式渲染Mouse组件
 */
export default App

/** HOC vs Render Props
 * HOC: 模式简单 但增加组件层级
 * Render Props: 代码简洁 学习成本较高
 * 按需使用
 */