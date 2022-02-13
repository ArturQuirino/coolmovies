import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useAppSelector } from '../../redux';
import { useRouter } from 'next/router';

const ReviewPage: NextPage = () => {
  const reviewsState = useAppSelector((state) => state.reviews);
  const { query } = useRouter();

  const [review, setReview] = useState({
    body: '',
    movieByMovieId: {
      id: '1',
      title: '',
      userByUserCreatorId: {
        id: '',
        name: '',
      },
    },
    rating: 0,
    title: '',
  });

  useEffect(() => {
    const pageReview = reviewsState.reviews.find((r) => r.id === query.id);
    if (pageReview) {
      setReview(pageReview);
    }
  });

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

export default ReviewPage;
