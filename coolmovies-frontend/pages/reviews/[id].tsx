import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { reviewsActions, useAppDispatch, useAppSelector } from '../../redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ViewReview from '../../components/viewReview';
import EditReview from '../../components/editReview';
import Review from '../../types/review';

const ReviewPage: NextPage = () => {
  const reviewsState = useAppSelector((state) => state.reviews);
  const dispatch = useAppDispatch();

  const { query } = useRouter();

  const [editMode, setEditMode] = useState(false);

  const [review, setReview] = useState({
    id: '',
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

  const changeEditionMode = (isEditMode: boolean) => {
    setEditMode(isEditMode);
  };

  const saveChanges = (editedReview: Review) => {
    dispatch(reviewsActions.editReview({ review: editedReview }));
    changeEditionMode(false);
  };

  return (
    <>
      {editMode ? (
        <EditReview review={review} saveChanges={saveChanges}></EditReview>
      ) : (
        <ViewReview review={review}></ViewReview>
      )}

      {!editMode && (
        <Link href="/reviews">
          <button>Back</button>
        </Link>
      )}

      {!editMode && (
        <button onClick={() => changeEditionMode(true)}>Edit</button>
      )}
    </>
  );
};

export default ReviewPage;
