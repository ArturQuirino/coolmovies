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
  },
});

export const { actions } = slice;
export type SliceAction = typeof actions;
export default slice.reducer;
