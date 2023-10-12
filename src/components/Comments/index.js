import React, { useState } from 'react';
import { v4 } from 'uuid';
import CommentItem from '../CommentItem';
import './index.css';

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
];

function Comments() {
  const [nameInput, setNameInput] = useState('');
  const [commentInput, setCommentInput] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const deleteComment = (commentId) => {
    setCommentsList((prevCommentsList) =>
      prevCommentsList.filter((comment) => comment.id !== commentId)
    );
  };

  const toggleIsLiked = (id) => {
    setCommentsList((prevCommentsList) =>
      prevCommentsList.map((eachComment) => eachComment.id ===id ? {...eachComment, isLiked: !eachComment.isLiked }:eachComment)
     
    );
  }; 

  
  const renderCommentsList = commentsList.map((eachComment) => (
    <CommentItem
      key={eachComment.id}
      commentDetails={eachComment}
      toggleIsLiked={toggleIsLiked}
      deleteComment={deleteComment}
    />
  ));

  const onAddComment = (event) => {
    event.preventDefault();
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1
        )
      ]
    }`;
    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    };

    setCommentsList([...commentsList, newComment]);
    setNameInput('');
    setCommentInput('');
  };

  return (
    <div className="app-container">
      <div className="comments-container">
        <h1 className="app-heading">Comments</h1>
        <div className="comments-inputs">
          <form className="form" onSubmit={onAddComment}>
            <p className="form-description">Say something about 4.0 Technologies</p>
            <input
              type="text"
              className="name-input"
              placeholder="Your Name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
            <textarea
              placeholder="Your Comment"
              className="comment-input"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              rows="6"
            />
            <button type="submit" className="add-button">
              Add Comment
            </button>
          </form>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="line" />
        <p className="heading">
          <span className="comments-count">{commentsList.length}</span>
          Comments
        </p>
        <ul className="comments-list">{renderCommentsList}</ul>
      </div>
    </div>
  );
}

export default Comments;
