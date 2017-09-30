/**
 * Created by agarbuzov on 28.09.2017.
 */
import React, {Component} from 'react'
import PropsTypes from 'prop-types'
import Comment from './Comment'

class CommentsList extends Component {

    static propTypes = {
        comments: PropsTypes.array
    };

    static defaultProps = {
        comments: []
    };

    state = {
        isOpenComments: false
    };
    handleComment = () => {
        this.setState({
            isOpenComments: !this.state.isOpenComments
        })
    };

    render() {

        const {comments} = this.props;
        const commentElement = comments.length ? (comments.map((comment) =>
            <li key={comment.id}>
                <Comment comment={comment}/>
            </li>
        )) : <h3>No Comments</h3>;

        return (
            <div>
                <button
                    onClick={this.handleComment}>{this.state.isOpenComments ? 'Close comment' : 'Open comments'}</button>
                {this.state.isOpenComments && <ul>{commentElement}</ul>}
            </div>
        )
    }

}

export default CommentsList
