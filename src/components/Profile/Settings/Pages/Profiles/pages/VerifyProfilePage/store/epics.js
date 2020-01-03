import {ofType} from "redux-observable";
import {catchError, concatMap, switchMap} from "rxjs/operators";
import {Http} from "../../../../../../../../services/Http";
import {displayErrorAction} from "../../../../../../../../store/actions/actions";
import {Observable} from "rxjs";
import {FETCH_VERIFY_PROFILE, fetchVerifyAccountFailure, fetchVerifyAccountSuccess} from "./actions";

export const fetchVerifyAccountEpic = action$ =>
	action$.pipe(
		ofType(FETCH_VERIFY_PROFILE),
		switchMap(action => {
			return Http.validateService(action.entity, action.username).pipe(
				concatMap(user => {
					if (user.data.Code) {
						return [
							displayErrorAction("error", user.data.Status),
							fetchVerifyAccountFailure(action.entity, user.data.Status),
						]
					} else {
						return [
							fetchVerifyAccountSuccess(action.entity, user.data),
						]
					}
				}),
				catchError(error =>
					Observable.of(fetchVerifyAccountFailure(action.entity, error.message))
				)
			);
		})
	);
