import { of } from "rxjs";
import { switchMap, catchError, map } from "rxjs/operators";
import { ofType } from "redux-observable";
import { Http } from "../../../../services/Http";
import {
  FETCH_PROJECTS,
  fetchProjectsFailure,
  fetchProjectsSuccess
} from "./actions";

const fetchProjectsEpic = action$ =>
  action$.pipe(
    ofType(FETCH_PROJECTS),
    switchMap(action => {
      return Http.projectAll(action.payload).pipe(
        map(projects => {
          return fetchProjectsSuccess(projects);
        }),
        catchError(error => of(fetchProjectsFailure(error.message)))
      );
    })
  );

export default fetchProjectsEpic;
