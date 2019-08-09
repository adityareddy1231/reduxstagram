import React from "react";
import Photo from "./Photo";
import { Link } from "react-router";
import Comments from "./Comments";

const Single = React.createClass({
  render() {
    const i = this.props.posts.findIndex(
      post => post.code === this.props.params.postid
    );

    const post = this.props.posts[i];
    const postComments = this.props.comments[this.props.params.postid] || [];

    return (
      <div className="single-photo ">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
});

export default Single;
