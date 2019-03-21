import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { combineEpics } from 'redux-observable';
import { Http } from '../../services/Http';

import { FETCH_PROJECTS, fetchProjectsFailure, fetchProjectsSuccess } from '../actions';

const fetchProjectsEpic = action$ => {
  return action$
    .ofType(FETCH_PROJECTS)
    .switchMap(() => Http.projectAll())
    .map(projects => fetchProjectsSuccess(projects))
    .catch(error => Observable.of(fetchProjectsFailure(error.message)))
};

export const rootEpic = combineEpics(fetchProjectsEpic);