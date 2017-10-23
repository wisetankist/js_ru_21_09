import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import ArticlesPage from './routes/ArticlesPage'
import Filters from './Filters'
import Counter from './Counter'

class App extends Component {
    state = {
        username: ''
    }

    render() {
        const {username} = this.state

        return (
            <div>
                <h1>App name</h1>
                User: <input type = 'text' value = {username} onChange = {this.handleUserChange}/>
                <Route path = '/counter' component = {Counter} />
                <Route path = '/filters' component = {Filters} />
                <Route path = '/articles' component = {ArticlesPage} />
            </div>
        )
    }

    handleUserChange = ev => {
        if (ev.target.value.length > 10) return this.setState({
            username: ''
        })

        this.setState({
            username: ev.target.value
        })
    }
}

export default App