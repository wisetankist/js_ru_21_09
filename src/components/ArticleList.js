import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'

function ArticleList(props) {
    if (!props.articles.length) return <h3>No Articles</h3>
    const articleElements = props.articles.map((article) => <li key={article.id}><Article article = {article} /></li>)
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleList