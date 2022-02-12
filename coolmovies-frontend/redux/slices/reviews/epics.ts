import { gql } from '@apollo/client';
import { Epic, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { RootState } from '../../store';
import { EpicDependencies } from '../../types';
import { actions, SliceAction } from './slice';

export const reviewsAsyncEpic: Epic = (
  action$: Observable<SliceAction['fetch']>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(actions.fetch.match),
    switchMap(async () => {
      const result = await client.query({
        query: allMovieReviewsQuery,
      });
      return actions.loaded({ data: result.data });
    })
  );

const allMovieReviewsQuery = gql`
  query allMovieReviews {
    allMovieReviews {
      nodes {
        title
        body
        rating
        movieByMovieId {
          id
          title
          userByUserCreatorId {
            id
            name
          }
        }
        commentsByMovieReviewId {
          nodes {
            id
            title
            body
            userByUserId {
              id
              name
            }
          }
        }
      }
    }
  }
`;
