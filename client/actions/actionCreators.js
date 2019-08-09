//increment
let increment = function(index) {
  return {
    type: "INCREMENT_LIKES",
    index
  };
};

//add a comment
let addComment = function(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  };
};

//remove a comment
let removeComment = function(postId, index) {
  return {
    type: "REMOVE_COMMENT",
    postId,
    index
  };
};

export { increment, addComment, removeComment };
