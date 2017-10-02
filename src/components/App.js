import React, {Component} from 'react'
import Select from 'react-select'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import 'react-select/dist/react-select.css'

class App extends Component {
    state = {
        selected: null
    }

    render() {
        const {articles} = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <h1>App name</h1>
                <Select options={options} value={this.state.selected} onChange={this.handleChange} multi />
                <ArticleList articles={articles}/>
                <ArticlesChart articles={articles}/>
            </div>
        )
    }

    handleChange = selected => this.setState({ selected })
}

export default App