import React from 'react';

class CommentForm extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        
        let author = this.refs.author.value;
        let text = this.refs.text.value;

        console.log("submitted form", author, text);
    }

    render() {
        // JSX
        return (
            <form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                    <input type="text" placeholder="Name" ref="author" />
                </div>
                <div className="field">
                    <textarea placeholder="Comment" ref="text" />
                </div>
                <button type="submit" className="ui blue button">
                    Add a comment.
                </button>
            </form>
        );
    }
}

export default CommentForm;