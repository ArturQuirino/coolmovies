import React, { useState } from 'react';
import Review from '../types/review';

const EditReview = ({
  review,
  saveChanges,
}: {
  review: Review;
  saveChanges: Function;
}) => {
  const [title, setTitle] = useState(review.title);
  const [body, setBody] = useState(review.body);

  const updateTitle = (event: any) => {
    setTitle(event.target.value);
  };

  const updateBody = (event: any) => {
    setBody(event.target.value);
  };

  const onSaveChanges = () => {
    const editedReview: Partial<Review> = {
      body,
      id: review.id,
      title,
    };
    saveChanges(editedReview);
  };

  return (
    <>
      <form onSubmit={onSaveChanges}>
        <label htmlFor="review-title">Title</label>
        <input
          type="text"
          id="review-title"
          value={title}
          onChange={updateTitle}
        />
        <label htmlFor="review-body">Body</label>
        <input
          type="text"
          id="review-body"
          value={body}
          onChange={updateBody}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default EditReview;
