import React from 'react';
import Review from '../types/review';

const EditReview = ({ review }: { review: Review }) => {
  return (
    <>
      <div>
        <label htmlFor="review-title">Title</label>
        <input type="text" id="review-title" value={review.title} />
        <label htmlFor="review-body">Body</label>
        <input type="text" id="review-body" value={review.body} />
      </div>
    </>
  );
};

export default EditReview;
