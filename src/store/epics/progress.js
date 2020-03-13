import { ofType } from "redux-observable";
import { catchError, concatMap, switchMap } from "rxjs/operators";
import { Http } from "../../services/Http";
import {
  displayErrorAction,
  SET_PROGRESS,
  progressActionFailure,
  progressActionSuccess
} from "../actions/actions";
import { of } from "rxjs";

export const progressActionEpic = action$ =>
  action$.pipe(
    ofType(SET_PROGRESS),
    switchMap(action => {
      return Http.progress({ ...action.data }).pipe(
        concatMap(response => {
          if (response.data.Code !== 200) {
            return [progressActionFailure(response.data.Status)];
          } else {
            return [progressActionSuccess(action.data.progress)];
          }
        }),
        catchError(error =>
          of(
            progressActionFailure(error.message),
            displayErrorAction("error", error.message)
          )
        )
      );
    })
  );
