import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentsList from './CommentsList'

class Article extends Component {

    static defaultProps = {};
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            date: PropTypes.string.isRequired
        }).isRequired,
        isOpen: PropTypes.bool,
        onClick: PropTypes.func
    };
    state = {
        isOpenComment: false
    };
    toggleComment = () => {
        this.setState({
            isOpenComment: !this.state.isOpenComment
        })
    };

    render() {
        const {article, isOpen, onButtonClick} = this.props
        const body = isOpen && <section>{article.text}
            <div>
                <button onClick={this.toggleComment}>{this.state.isOpenComment ? 'Close comments' : 'Open comments'}</button>
            </div>
            {this.state.isOpenComment && <CommentsList comments={article.comments}/>}</section>;
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }
}


export default Article