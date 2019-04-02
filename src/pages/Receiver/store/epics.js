import { Observable } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { Http } from '../../../services/Http';
import {
  FETCH_RECEIVER,
  fetchReceiverFailure,
  fetchReceiverSuccess
} from './actions';

const fetchReceiverEpic = action$ =>
  action$.pipe(
    ofType(FETCH_RECEIVER),
    switchMap(() =>
      Http.recipientValidate().pipe(
        map(receiver => fetchReceiverSuccess(receiver)),
        catchError(error => Observable.of(fetchReceiverFailure(error.message)))
      )
    )
  );

export default fetchReceiverEpic;
