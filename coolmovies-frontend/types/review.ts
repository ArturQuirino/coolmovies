import Movie from './movie';

type Review = {
  title: string;
  body: string;
  rating: number;
  movieByMovieId: Movie;
};

export default Review;
