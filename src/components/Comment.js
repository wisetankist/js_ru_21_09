/**
 * Created by agarbuzov on 28.09.2017.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component{

    static propTypes = {
        comment: PropTypes.shape({
            id: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    };

    render(){

        const {comment} = this.props;

        return (
            <div>
                <h2>{comment.user}</h2>
                <div>{comment.text}</div>
            </div>
        )
    }
}

export default Comment