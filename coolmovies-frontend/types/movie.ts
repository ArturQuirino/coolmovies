import User from './user';

type Movie = {
  id: string;
  title: string;
  userByUserCreatorId: User;
};

export default Movie;
