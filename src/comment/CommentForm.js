import React from 'react';

class CommentForm extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        console.log("submitted form");
    }

    render() {
        // JSX
        return (
            <form className="ui reply form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <input type="text" placeholder="Name" />
                </div>
                <div className="field">
                    <textarea placeholder="Comment" />
                </div>
                <button type="submit" className="ui blue button">
                    Add a comment.
                </button>
            </form>
        );
    }
}

export default CommentForm;