import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import ArticlesPage from './routes/ArticlesPage'
import CommentsPage from './routes/CommentsPage'
import Filters from './Filters'
import Counter from './Counter'
import Menu, {MenuItem} from './Menu'
import LangProvider from './LangProvider'

class App extends Component {
    state = {
        username: '',
        language: 'ru'
    }

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.username
        }
    }

    changeLanguage = language => ev => this.setState({language})

    render() {
        const {username} = this.state

        return (
            <LangProvider language={this.state.language}>
                <div>
                    <h1>App name</h1>
                    <ul>
                        <li onClick={this.changeLanguage('en')}>English</li>
                        <li onClick={this.changeLanguage('ru')}>Russian</li>
                    </ul>
                    <Menu>
                        <MenuItem to='/articles'>articles</MenuItem>
                        <MenuItem to='/filters'>filters</MenuItem>
                        <MenuItem to='/counter'>counter</MenuItem>
                        <MenuItem to='/comments/1'>comments</MenuItem>
                    </Menu>
                    User: <input type='text' value={username} onChange={this.handleUserChange}/>
                    <Switch>
                        <Redirect from='/' exact to='/articles'/>
                        <Route path='/counter' component={Counter} exact/>
                        <Route path='/filters' component={Filters}/>
                        <Route path='/articles/new' render={this.newArticlePage}/>
                        <Route path='/articles' component={ArticlesPage}/>
                        <Route path='/comments' component={CommentsPage}/>
                        <Route path='*' render={this.notFound}/>
                    </Switch>
                </div>
            </LangProvider>
        )
    }

    notFound = () => <h1>Not Found</h1>

    newArticlePage = () => <h1>New Article Page</h1>

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