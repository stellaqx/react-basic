'use strict';

import React from 'react';

/*
props
*/
class Comment extends React.Component {
    render() {
        // JSX
        return (
            <div className="ui comment">
                <div className="content">
                    <span className="author">{this.props.author}</span>
                </div>
                <div className="metadata">
                    <span className="date">{this.props.date}</span>
                </div>
                <div className="text"> 
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Comment;