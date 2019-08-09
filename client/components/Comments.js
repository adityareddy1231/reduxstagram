import React from "react";

const Comments = React.createClass({
  renderComments(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={this.props.removeComment.bind(
              null,
              this.props.params.postid,
              i
            )}
          >
            &times;
          </button>
        </p>
      </div>
    );
  },

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting form");
    const postid = this.props.params.postid;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postid, author, comment);
    this.refs.currentForm.reset();
  },

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map((comment, i) =>
          this.renderComments(comment, i)
        )}
        <form
          ref="currentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
});

export default Comments;
