import { ofType } from "redux-observable";
import { catchError, concatMap, switchMap } from "rxjs/operators";
import { Http } from "../../../../../../../../services/Http";
import { displayErrorAction } from "../../../../../../../../store/actions/actions";
import { of } from "rxjs";
import {
  FETCH_VERIFY_ENTITY_PROFILE,
  FETCH_VERIFY_PROFILE,
  fetchVerifyAccountFailure,
  fetchVerifyAccountSuccess,
  fetchVerifyEntityAccountFailure,
  fetchVerifyEntityAccountSuccess
} from "./actions";

export const fetchVerifyAccountEpic = action$ =>
  action$.pipe(
    ofType(FETCH_VERIFY_PROFILE),
    switchMap(action => {
      return Http.validateService(action.entity, action.username).pipe(
        concatMap(user => {
          if (user.data.Code) {
            return [
              displayErrorAction("error", user.data.Status),
              fetchVerifyAccountFailure(action.entity, user.data.Status)
            ];
          } else {
            return [fetchVerifyAccountSuccess(action.entity, user.data)];
          }
        }),
        catchError(error =>
          of(fetchVerifyAccountFailure(action.entity, error.message))
        )
      );
    })
  );

export const fetchVerifyEntityAccountEpic = action$ =>
  action$.pipe(
    ofType(FETCH_VERIFY_ENTITY_PROFILE),
    switchMap(action => {
      return Http.validateEntityService(action.entity, action.username).pipe(
        concatMap(user => {
          if (user.data.Code) {
            return [
              displayErrorAction("error", user.data.Status),
              fetchVerifyEntityAccountFailure(action.entity, user.data.Status)
            ];
          } else {
            return [fetchVerifyEntityAccountSuccess(action.entity, user.data)];
          }
        }),
        catchError(error =>
          of(fetchVerifyEntityAccountFailure(action.entity, error.message))
        )
      );
    })
  );
