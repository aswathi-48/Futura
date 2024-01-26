import React, { useState } from 'react';

const Comment = ({ comment, onDelete, onEdit, onReply }) => {
  const [isReplying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReply = () => {
    if (isReplying && replyText.trim() !== '') {
      onReply(comment.id, replyText);
      setReplyText('');
    }
    setReplying(!isReplying);
  };

  const handleEdit = () => {
    const updatedText = prompt('Edit comment:', comment.text);
    if (updatedText !== null && updatedText.trim() !== '') {
      onEdit(comment.id, updatedText);
    }
  };

  return (
    <div className="comment">
      <p>{comment.text}</p>
      <div className="comment-actions">
        <button onClick={handleReply}>{isReplying ? 'Cancel Reply' : 'Reply'}</button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => onDelete(comment.id)}>Delete</button>
      </div>
      {isReplying && (
        <div className="reply-form">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Type your reply..."
          />
          <button onClick={handleReply}>Reply</button>
        </div>
      )}
      {comment.replies && (
        <div className="replies">
          {comment.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              onDelete={onDelete}
              onEdit={onEdit}
              onReply={onReply}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const CommentWidget = () => {
  const [comments, setComments] = useState([
    { id: 1, text: 'First comment', replies: [] },
    { id: 2, text: 'Second comment', replies: [] },
  ]);

  const handleDelete = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );
  };

  const handleEdit = (commentId, newText) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId ? { ...comment, text: newText } : comment
      )
    );
  };

  const handleReply = (commentId, replyText) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, { id: Date.now(), text: replyText }] }
          : comment
      )
    );
  };

  return (
    <div className="comment-widget">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onReply={handleReply}
        />
      ))}
    </div>
  );
};

export default CommentWidget;
