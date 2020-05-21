'use strict';

import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';
import loadJsonFile from "load-json-file";

// we would like to query the server for comments data
// and only update the part that has changed
// we can use "state" to acheive
// we will jQuery to asyncly get it
class CommentBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {comments: []}; 

        console.log(this.props.url);

        // $.ajax({
        //     url: this.props.url,
        //     dataType: 'json',
        //     cache: false,
        //     success: comments => {
        //         this.setState({
        //             comments:comments
        //         })
        //     },
        //     error:(xhr, status, error) => {
        //         console.log(error);
        //     }
        // });

        // loadJsonFile("../../public/comments.json")
        // .then(json => {
        //     console.log(json);
        //     this.setState({
        //         comments:json
        //     });
        // });
    }

    componentDidMount() {
        let comments = require("../comments.json");
        console.log(comments);
        this.setState({
            comments:comments
        });
    }

    render() {
        // JSX
        return (
            <div className="ui comments">
                <h1>Comments</h1>
                <div className="ui divider">
                    <CommentList comments={this.state.comments}/>
                    <CommentForm />
                </div>
            </div>
        );
    }
}

export default CommentBox;