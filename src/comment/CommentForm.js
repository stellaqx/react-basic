'use strict';

import React from 'react';

class CommentForm extends React.Component {
    render() {
        // JSX
        return (
            <form className="ui reply form">
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