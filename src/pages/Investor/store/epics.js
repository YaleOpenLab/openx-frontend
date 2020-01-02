import { Observable } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { Http } from '../../../services/Http';
import 'rxjs/add/observable/of';
import {
  FETCH_INVESTOR,
  fetchInvestorFailure,
  fetchInvestorSuccess
} from './actions';
import {displayErrorAction} from "../../../store/actions/actions";

const fetchInvestorEpic = action$ =>
  action$.pipe(
    ofType(FETCH_INVESTOR),
    switchMap(() =>
      Http.investorValidate().pipe(
        map(investor => fetchInvestorSuccess(investor)),
        catchError(error => {
        	return Observable.of(fetchInvestorFailure(error.message), displayErrorAction("error", error.message));
				})
      )
    )
  );

export default fetchInvestorEpic;
