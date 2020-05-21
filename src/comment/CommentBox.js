'use strict';

import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';


class CommentBox extends React.Component {
    render() {
        // JSX
        return (
            <div className="ui comments">
                <h1>Comments</h1>
                <div className="ui divider">
                    <CommentList />
                    <CommentForm />
                </div>
            </div>
        );
    }
}

export default CommentBox;