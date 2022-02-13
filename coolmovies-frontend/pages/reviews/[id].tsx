import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useAppSelector } from '../../redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ViewReview from '../../components/viewReview';
import EditReview from '../../components/editReview';

const ReviewPage: NextPage = () => {
  const reviewsState = useAppSelector((state) => state.reviews);
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

  const saveChanges = () => {
    //save changes
    changeEditionMode(false);
  };

  return (
    <>
      {editMode ? (
        <EditReview review={review}></EditReview>
      ) : (
        <ViewReview review={review}></ViewReview>
      )}

      {!editMode && (
        <Link href="/reviews">
          <button>Back</button>
        </Link>
      )}

      {editMode ? (
        <button onClick={saveChanges}>Save</button>
      ) : (
        <button onClick={() => changeEditionMode(true)}>Edit</button>
      )}
    </>
  );
};

export default ReviewPage;
