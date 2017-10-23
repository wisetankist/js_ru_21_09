import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import ArticleList from '../ArticleList'
import Article from '../Article'

class ArticlesPage extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', 'Article Page Match', this.props.match)
        return (
            <div>
                <ArticleList />
                <Route path = '/articles/:id' render = {this.getArticleView}/>
            </div>
        )
    }

    getArticleView = ({ match }) => {
        console.log('---', 'Article Match', match)
        return <Article isOpen id = {match.params.id} />
    }
}

export default ArticlesPage