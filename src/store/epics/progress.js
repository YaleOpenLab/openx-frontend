import {ofType} from "redux-observable";
import {catchError, concatMap, switchMap} from "rxjs/operators";
import {Http} from "../../services/Http";
import {
	displayErrorAction,
	SET_PROGRESS,
	progressActionFailure,
	progressActionSuccess,
	PROGRESS, fetchProgressActionFailure, fetchProgressActionSuccess
} from "../actions/actions";
import {Observable} from "rxjs";

export const progressActionEpic = action$ =>
	action$.pipe(
		ofType(SET_PROGRESS),
		switchMap(action => {
			return Http.progress({...action.data}).pipe(
				concatMap(response => {
					if (response.data.Code !== 200) {
						return [
							progressActionFailure(response.data.Status),
						]
					} else {
						return [
							progressActionSuccess(response.data),
						]
					}
				}),
				catchError(error =>
					Observable.of(progressActionFailure(error.message), displayErrorAction("error", error.message))
				)
			);
		})
	);

export const fetchProgressActionEpic = action$ =>
	action$.pipe(
		ofType(PROGRESS),
		switchMap(action => {
			return Http.getProgress().pipe(
				concatMap(response => {
					if (response.data.Code) {
						return [
							fetchProgressActionFailure(response.data.Status),
						]
					} else {
						return [
							fetchProgressActionSuccess(response.data),
						]
					}
				}),
				catchError(error =>
					Observable.of(fetchProgressActionFailure(error.message), displayErrorAction("error", error.message))
				)
			);
		})
	);
