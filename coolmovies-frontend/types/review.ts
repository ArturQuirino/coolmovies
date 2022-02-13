import Movie from './movie';

type Review = {
  id: string;
  title: string;
  body: string;
  rating: number;
  movieByMovieId: Movie;
};

export default Review;
