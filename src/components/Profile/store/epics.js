import {Http} from "../../../services/Http";
import {catchError, switchMap, map, concatMap} from "rxjs/operators";
import {ofType} from "redux-observable";
import {Observable, forkJoin} from "rxjs";
import "rxjs/add/observable/of";
import {
	updateAccountFailure,
	registerActionSuccess,
	registerActionFailure,
	validateActionSuccess,
	validateActionFailure,
	validateAction, registerAction, updateAccountSuccess,
} from "./actions";
import {TYPES} from "./actionTypes";
import {displayErrorAction} from "../../../store/actions/actions";

export const updateAccountEpic = (action$, store) =>
	action$.pipe(
		ofType(TYPES.UPDATE),
		switchMap(action => {
			return Http.updateAccount(action.data).pipe(
				concatMap(user => [
					updateAccountSuccess(action.entity),
					displayErrorAction("success", "User Updated"),
					validateAction(action.entity, action.data.username),
				]),
				catchError(error =>
					Observable.of(updateAccountFailure(action.entity, error.message), displayErrorAction("error", error.message))
				)
			);
		})
	);

export const validateActionEpic = action$ =>
	action$.pipe(
		ofType(TYPES.user.VALIDATE),
		switchMap(action => {
			return Http.validateService(action.entity, action.username).pipe(
				concatMap(user => {
					if (user.data.Code) {
						return [
							displayErrorAction("error", user.data.Status),
							validateActionFailure(action.entity, user.data.Status),
						]
					} else {
						return [
							validateActionSuccess(action.entity, user.data),
						]
					}
				}),
				catchError(error =>
					Observable.of(validateActionFailure(action.entity, error.message))
				)
			);
		})
	);

	export const validateInvestorEpic = action$ =>
	action$.pipe(
		ofType(TYPES.investor.VALIDATE),
		switchMap(action => {
			return Http.validateService(action.entity, action.username).pipe(
				concatMap(user => {
					if (user.data.Code) {
						return [
							displayErrorAction("error", user.data.Status),
							validateActionFailure(action.entity, user.data.Status),
						]
					} else {
						return [
							validateActionSuccess(action.entity, user.data),
						]
					}
				}),
				catchError(error =>
					Observable.of(validateActionFailure(action.entity, error.message))
				)
			);
		})
	);

	export const validateRecipientEpic = action$ =>
	action$.pipe(
		ofType(TYPES.recipient.VALIDATE),
		switchMap(action => {
			return Http.validateService(action.entity, action.username).pipe(
				concatMap(user => {
					if (user.data.Code) {
						return [
							displayErrorAction("error", user.data.Status),
							validateActionFailure(action.entity, user.data.Status),
						]
					} else {
						return [
							validateActionSuccess(action.entity, user.data),
						]
					}
				}),
				catchError(error =>
					Observable.of(validateActionFailure(action.entity, error.message))
				)
			);
		})
	);

export const registerActionEpic = action$ =>
	action$.pipe(
		ofType(TYPES.REGISTER),
		switchMap(action => {
			return Http.registerService(action.entity, {...action.data}).pipe(
				concatMap(user => {
					if (user.data.Code) {
						return [
							displayErrorAction("error", user.data.Status),
							registerActionFailure(action.entity, user.data.Status),
						]
					} else {
						return [
							displayErrorAction("success", "User Created"),
							registerActionSuccess(action.entity, user.data),
						]
					}
				}),
				catchError(error =>
					Observable.of(registerActionFailure(action.entity, error.message), displayErrorAction("error", error.message))
				)
			);
		})
	);
