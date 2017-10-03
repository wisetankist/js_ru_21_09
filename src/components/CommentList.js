import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import addUserComment from '../decorators/addUserComment'

class CommentList extends Component {
    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillUnmount() {
        console.log('---', 'unmounting')
    }

    componentWillReceiveProps() {
        console.log('---', 'updating')
    }

    render() {
        const {comments, isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {getBody(this.props)}
            </div>
        )
    }
}

function getBody(props) {
    const {comments, isOpen} = props
    if (!isOpen) return null

    const body = comments.length ? (
        <div>
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
            </ul>
            {getInputFields(props)}
        </div>

    ) : <h3>No comments yet</h3>

    return (
        <div>
            {body}
        </div>
    )
}

function getInputFields(props) {
    const {user, commentText, handleChange, handleSubmit} = props;
    return (
        <div>
            <label>User <input type="text" id='user' value={user} onChange={handleChange}/></label>
            <label>Your comment <textarea id='commentText' value={commentText} onChange={handleChange}/></label>
            <input type="submit" value="Add comment" onClick={handleSubmit}/>
        </div>
    )
}


CommentList.defaultProps = {
    comments: []
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
}

export default toggleOpen(addUserComment(CommentList))