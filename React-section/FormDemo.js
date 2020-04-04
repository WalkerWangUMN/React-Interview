import React from 'react'
/** 表单
 * 受控组件
 * input textarea select用value
 * checkbox radio用checked
 */
class FormDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: 'ZW', location: 'Minneapolis', info:'Personal info', flag: true, gender:'male'}
    }
    render() {
        // 受控组件 - input表单里的值受state的值控制
        return <div>
            <p>{this.state.name}</p>
            <label htmlFor='inputName'>Name: </label>  {/** 用htmlfor替代for */}
            <input id='inputName' value={this.state.name} onChange={this.onInputChange}/>
        </div>
        // textarea - 使用value
        return <div>
            <textarea value={this.state.info} onChange={this.onTextareaChange}/>
            <p>{this.state.info}</p>
        </div>
        // select - 使用value
        return <div>
            <select value={this.state.location} onChange={this.onSelectChange}>
                <option value='nyc'>NYC</option>
                <option value='la'>LA</option>
            </select>
            <p>{this.state.location}</p>
        </div>
        // checkbox
        return <div>
            <input type="checkbox" checked={this.state.flag} onChange={this.onCheckboxChange} />
            <p>{this.state.flag.toString()}</p>
        </div>
        // radio
        return <div>
            male <input type='radio' name='gender' value='male' checked={this.state.gender==='male'} onChange={this.onRadioChange}/>
            female <input type='radio' name='gender' value='female' checked={this.state.gender==='female'} onChange={this.onRadioChange}/>
            <p>{this.state.gender}</p>
        </div>

    }
    onInputChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    onTextareaChange = (e) => {
        this.setState({
            info: e.target.value
        })
    }
    onSelectChange = (e) => {
        this.setState({
            location: e.target.value
        })
    }
    onCheckboxChange = () => {
        this.setState({
            flag: !this.state.flag
        })
    }
    onRadioChange = (e) => {
        this.setState({
            gender: e.target.value
        })
    }
}

export default FormDemo