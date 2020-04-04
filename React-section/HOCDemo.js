import React from 'react'

// 高级组件
const withMouse = (Component) => {
    class withMouseComponent extends React.Component {
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
                    {/** 1. 透传所有props 2. 增加mouse属性 */}
                    <Component {...this.props} mouse={this.state}/>
                </div>
            )
        }
    }
    return withMouseComponent
}

const App = (props) => {
    const a = props.a
    const {x, y} = props.mouse // 接受mouse属性
    return (
        <div style={{height: '500px'}}>
            <h1>The mouse position is ({x}, {y})</h1>
            <p>{a}</p>
        </div>
    )
}

export default withMouse(App) // 返回高阶函数

/** 组件公共逻辑的抽离
 * 高级组件HOC
 * Render Props
 */