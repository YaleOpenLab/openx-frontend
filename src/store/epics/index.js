import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';
import { combineEpics } from 'redux-observable';


import {
    FETCH_PROJECTS,
    fetchProjectsFailure,
    fetchProjectsSuccess
} from "../actions";

const url = 'https://evening-citadel-85778.herokuapp.com/whiskey/';

const fetchProjectsEpic = action$ => {
    return action$
        .ofType(FETCH_PROJECTS)
        .switchMap(() => {
            return ajax
                .getJSON(url)
                .map(data => data.results)
                .map(whiskies => whiskies.map(whisky => ({
                    id: whisky.id,
                    title: whisky.title,
                    imageUrl: whisky.img_url
                })))
                .map(whiskies => whiskies.filter(whisky => !!whisky.imageUrl))
        })
        .map(whiskies => fetchProjectsSuccess(whiskies))
        .catch(error => Observable.of(fetchProjectsFailure(error.message)))
};

export const rootEpic = combineEpics(fetchProjectsEpic);