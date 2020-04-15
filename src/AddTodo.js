import React, {Component} from 'react'

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
        }
    }

    handleInput = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })
    }
    
    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Add a new todo:</label>
                <input value={this.state.content} type="text" onChange={this.handleInput}/>
            </form>
        )
    }
}

export default AddTodo