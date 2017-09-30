import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
// import Accordion from './Accordion'
import articleAccordion from '../decorators/articleAccordion'

function ArticleList(props) {

    const {articles, openArticleId, toggleArticle} = props
    if (!articles.length) return <h3>No Articles</h3>
    const articleElements = articles.map((article) => <li key={article.id}>
        <Article article={article}
                 isOpen={article.id === openArticleId}
                 onButtonClick={toggleArticle(article.id)}
        />
    </li>)
    return (
        <ul>
            {articleElements}
        </ul>
    )

}
// class ArticleList extends Accordion{
//
//     render() {
//         const {articles} = this.props
//         if (!articles.length) return <h3>No Articles</h3>
//         const articleElements = articles.map((article) => <li key={article.id}>
//             <Article article={article}
//                      isOpen={article.id === this.state.openArticleId}
//                      onButtonClick={this.toggleArticle(article.id)}
//             />
//         </li>)
//         return (
//             <ul>
//                 {articleElements}
//             </ul>
//         );
//     }
// }

ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

// export default ArticleList
export default articleAccordion(ArticleList)