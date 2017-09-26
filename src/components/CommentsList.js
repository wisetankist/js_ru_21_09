import React, {Component} from 'react'
import PropTypes from 'prop-types'

class CommentsList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired
    };

    render() {
        const {comments} = this.props;
        if (!comments.length) return <h3>No Comments</h3>
        const commentsElement = comments.map((comment) =>
            <li key={comment.id}>
                <h2>{comment.user}</h2>
                <div>{comment.text}</div>
            </li>
        );
        return (
            <ul>
                {commentsElement}
            </ul>
        )
    }
}

export default CommentsList