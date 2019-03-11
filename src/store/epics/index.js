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

const url = 'https://evening-citadel-85778.herokuapp.com/whiskey/'; // The API for the whiskies

const fetchProjectsEpic = action$ => {
    return action$
        .ofType(FETCH_PROJECTS) // ofType(FETCH_WHISKIES) is just a simpler version of .filter(x => x.type === FETCH_WHISKIES)
        .switchMap(() => {
            return ajax
                .getJSON(url) // getJSON simply sends a GET request with Content-Type application/json
                .map(data => data.results) // get the data and extract only the results
                .map(whiskies => whiskies.map(whisky => ({
                    id: whisky.id,
                    title: whisky.title,
                    imageUrl: whisky.img_url
                })))// we need to iterate over the whiskies and get only the properties we need
                .map(whiskies => whiskies.filter(whisky => !!whisky.imageUrl))
        })
        .map(whiskies => fetchProjectsSuccess(whiskies)) // map the resulting array to an action of type FETCH_WHISKIES_SUCCESS
        .catch(error => Observable.of(fetchProjectsFailure(error.message)))
};

export const rootEpic = combineEpics(fetchProjectsEpic);