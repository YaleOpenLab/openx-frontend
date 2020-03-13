import { of } from "rxjs";
import { switchMap, catchError, map } from "rxjs/operators";
import { ofType } from "redux-observable";
import { Http } from "../../../../services/Http";
import {
  FETCH_PROJECT,
  fetchProjectFailure,
  fetchProjectSuccess
} from "./actions";

const fetchProjectEpic = (action$, state$) => {
  return action$.pipe(
    ofType(FETCH_PROJECT),
    switchMap(action =>
      Http.projectGet(action.payload).pipe(
        map(projects => {
          return fetchProjectSuccess(projects);
        }),
        catchError(error => of(fetchProjectFailure(error.message)))
      )
    )
  );
};

export default fetchProjectEpic;
