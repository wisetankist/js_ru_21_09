import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Article extends Component {
    static defaultProps = {

    }

    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            date: PropTypes.string.isRequired
        }).isRequired
    }

    state = {
        isOpen: true
    }

    render() {
        const {article} = this.props
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    handleClick = () => {
        this.setState((state) => {
            return {
                isOpen: !state.isOpen
            }
        })
    }
}


export default Article