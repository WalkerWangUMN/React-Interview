import React from 'react'
/** Context: 父组件向其下所有子孙组件传递信息
 * 涉及公共信息 e.g: 主题颜色 语言
 * 应用场景: 最外层定义的state 将数据往下传递的方式
 * 核心API: ThemeContext.Provider ThemeContext.Consumer
 */

// 创建Context填入默认值 (任何一个JS变量)
const ThemeContext = React.createContext('light')
// 底层组件 - 函数是组件
function ThemeLink(props) {
    // const theme = this.context // 会报错 函数式组件没有实例 即没有this
    // 函数式组件可以使用Consumer
    return <ThemeContext.Consumer>
        {value => <p>link's theme is {value}</p>}
    </ThemeContext.Consumer>
}

// 底层组件 - class组件
class ThemeButton extends React.Component {
    // 指定contextType读取当前theme context
    // static contextType = ThemeContext // 也可以用ThemedButton.contextType = ThemeContext
    render() {
        const theme = this.context // React会往上找到最近的theme Provider 然后使用它的值
        return <div>
            <p>button's theme is {theme}</p>
        </div>
    }
}
ThemeButton.contextType = ThemeContext // 指定contextType读取当前的theme context

// 中间组件不必指明往下传递theme
function Toolbar(props) {
    return(
        <div>
            <ThemeButton />
            <ThemeLink />
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {theme: 'light'}
    }
    render() {
        return <ThemeContext.Provider value={this.state.theme}>
            <Toolbar />
            <hr />
            <button onClick={this.changeTheme}>change theme</button>
        </ThemeContext.Provider>
    }
    changeTheme = () => {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light'
        })
    }
}

export default App