import React, { FunctionComponent } from 'react';
import Review from '../types/review';

const ViewReview: FunctionComponent<{ review: Review }> = ({ review }) => {
  return (
    <>
      <h1>Review {review.title}</h1>
      <div>
        <h2>{review.title}</h2>
        <p>{review.body}</p>
      </div>
    </>
  );
};

export default ViewReview;
