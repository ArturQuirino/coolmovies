import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { useAppDispatch, useAppSelector } from '../redux';
import { reviewsActions } from '../redux/slices/reviews';

const Reviews: NextPage = () => {
  const dispatch = useAppDispatch();
  const reviewsState = useAppSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(reviewsActions.fetch());
  }, []);

  return (
    <>
      <h1>Reviews</h1>
      {reviewsState.reviews.map((review) => (
        <div>
          <h2>{review.title}</h2>
          <p>{review.body}</p>
        </div>
      ))}
    </>
  );
};

export default Reviews;
