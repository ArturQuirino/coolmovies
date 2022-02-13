import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import allMovieReviewsResponse from '../../../types/allMoviesReviewResponse';
import Review from '../../../types/review';

interface ReviewsState {
  reviews: Review[];
}

const initialState: ReviewsState = {
  reviews: [],
};

export const slice = createSlice({
  initialState,
  name: 'review',
  reducers: {
    fetch: () => {},
    loaded: (
      state,
      action: PayloadAction<{ data: allMovieReviewsResponse }>
    ) => {
      state.reviews = action.payload.data.allMovieReviews.nodes;
    },
    editReview: (state, action: PayloadAction<{ review: Review }>) => {
      state.reviews = state.reviews.filter(
        (r) => r.id !== action.payload.review.id
      );
      state.reviews.push(action.payload.review);
    },
  },
});

export const { actions } = slice;
export type SliceAction = typeof actions;
export default slice.reducer;
