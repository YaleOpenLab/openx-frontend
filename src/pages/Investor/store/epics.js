import { Observable } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { Http } from '../../../services/Http';
import {
  FETCH_INVESTOR,
  fetchInvestorFailure,
  fetchInvestorSuccess
} from './actions';

const fetchInvestorEpic = action$ =>
  action$.pipe(
    ofType(FETCH_INVESTOR),
    switchMap(() =>
      Http.investorValidate().pipe(
        map(investor => fetchInvestorSuccess(investor)),
        catchError(error => Observable.of(fetchInvestorFailure(error.message)))
      )
    )
  );

export default fetchInvestorEpic;
