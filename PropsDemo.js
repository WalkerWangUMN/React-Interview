import React from 'react'
import PropTypes from 'prop-types'
/** 组件使用
 * props传递数据
 * props传递函数
 * props类型检查
 */
class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = { title: ''}
    }
    render() {
        return <div>
            <input value={this.state.title} onChange={this.onTitleChange}/>
            <button onClick={this.onSubmit}>Submit</button>
        </div>
    }
    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    onSubmit = () => {
        const {submitTitle} = this.props
        submitTitle(this.state.title)
        this.setState({
            title: ''
        })
    }
}
// props类型检查
Input.PropTypes = {
    submitTitle: PropTypes.func.isRequired
}

class List extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {list} = this.props
        return <ul>{list.map((item, index) => {
            return  <li key={item.id}>
                <span>{item.title}</span>
            </li>
        })}</ul>
    }
}
// props类型检查
List.PropTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <p>
            {this.props.text}
            {this.props.length}
        </p>
    }
    componentDidUpdate() {
        console.log('footer did update')
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.text !== this.props.text ||
            nextProps.length !== this.props.length) return true // 可渲染
        return false // 不重复渲染
    }
}

class TodoListDemo extends React.Component {
    constructor(props) {
        super(props)
        // 数据提升
        this.state = {
            list: [
                {id: 'id-1', title:'title1'},
                {id: 'id-2', title:'title2'}
            ],
            footerInfo: 'bottom'
        }
    }
    render() {
        return <div>
            <Input submitTitle={this.onSubmitTitle}/>
            <List list={this.state.list}/>
            <Footer text={this.state.footerInfo} length={this.state.list.length}/>
        </div>
    }
    onSubmitTitle = (title) => {
        this.setState({
            list: this.state.list.concat({
                id: `id-${Date.now()}`,
                title
            })
        })
    }
 }

 export default TodoListDemo