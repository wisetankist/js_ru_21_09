import React, { Component as ReactComponent } from 'react'

export default (OriginalComponent) => class AddComment extends ReactComponent {
    state = {
        user: '',
        commentText: ''
    };

    handleChange = event => {
        event.target.value.length > 10 && event.target.value.length < 50 ? event.target.style.background = 'white' : event.target.style.background = 'red';
        this.setState({[event.target.id]: event.target.value});
    };

    handleSubmit = event => {
        this.state.user.length > 10 && this.state.user.length < 50 && this.state.commentText.length > 10 && this.state.commentText.length < 50 ? this.setState({
            user: '',
            commentText: ''
        }) : event.preventDefault();
    };

    render() {
        return <OriginalComponent {...this.props} user={this.state.user} commentText={this.state.commentText}
                                  handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    }
}