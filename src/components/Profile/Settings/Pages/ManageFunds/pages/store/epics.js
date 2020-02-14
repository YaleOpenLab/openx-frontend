import { ofType } from "redux-observable";
import { catchError, concatMap, switchMap } from "rxjs/operators";
import { Http } from "../../../../../../../services/Http";
import { displayErrorAction } from "../../../../../../../store/actions/actions";
import { Observable } from "rxjs";
import {
  FETCH_FUNDS_PROFILE,
  fetchFundsAccountSuccess,
  fetchFundsAccountFailure
} from "./actions";

export const fetchFundsAccountEpic = action$ =>
  action$.pipe(
    ofType(FETCH_FUNDS_PROFILE),
    switchMap(action => {
      return Http.validateService(action.entity, action.username).pipe(
        concatMap(user => {
          if (user.data.Code) {
            return [
              displayErrorAction("error", user.data.Status),
              fetchFundsAccountFailure(action.entity, user.data.Status)
            ];
          } else {
            return [fetchFundsAccountSuccess(action.entity, user.data)];
          }
        }),
        catchError(error =>
          Observable.of(fetchFundsAccountFailure(action.entity, error.message))
        )
      );
    })
  );
