import { Observable } from 'rxjs';
import { Http } from '../../../../services/Http';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { FETCH_PROJECTS, fetchProjectsFailure, fetchProjectsSuccess } from './actions';

const fetchProjectsEpic = action$ => {
  return action$
    .ofType(FETCH_PROJECTS)
    .switchMap(() => Http.projectAll())
    .map(projects => fetchProjectsSuccess(projects))
    .catch(error => Observable.of(fetchProjectsFailure(error.message)))
};

export default fetchProjectsEpic;