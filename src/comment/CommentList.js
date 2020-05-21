import React from 'react';
import Comment from './Comment';

/* 
<Comment author="Joe" date="5 minutes ago">Hi there!</Comment>
<Comment author="Chris" date="12 hours ago">What a nice day~</Comment>
<Comment author="Zion" date="2 days ago">XDD</Comment> 
in this.props.data, each element in the json array, is a map of key-value
*/
class CommentList extends React.Component {
    render() {
        let commentNodes = this.props.comments.map(
            comment => {
                return (
                    <Comment author={comment.author} date={comment.date}>
                        {comment.text}
                    </Comment>
                );
            }
        );
        console.log(this.props.data);
        // JSX
        return (
            <div className="ui commentList"> Comment List
                {commentNodes}
            </div>
        );
    }
}

export default CommentList;