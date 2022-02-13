import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { useAppDispatch, useAppSelector } from '../redux';
import { reviewsActions } from '../redux/slices/reviews';
import Link from 'next/link';

const Reviews: NextPage = () => {
  const dispatch = useAppDispatch();
  const reviewsState = useAppSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(reviewsActions.fetch());
  }, []);

  const navigateToReviewDetails = () => {};

  return (
    <>
      <h1>Reviews</h1>
      {reviewsState.reviews.map((review) => (
        <Link href={`/reviews/${review.id}`}>
          <div>
            <h2>{review.title}</h2>
            <p>{review.body}</p>
          </div>
        </Link>
      ))}
      <button>Add Review</button>
    </>
  );
};

export default Reviews;
