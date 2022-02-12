import Review from './review';

type allMovieReviewsResponse = {
  allMovieReviews: AllMovieReviews;
};

type AllMovieReviews = {
  nodes: Review[];
};

export default allMovieReviewsResponse;
