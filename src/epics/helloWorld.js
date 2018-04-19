import { Observable } from 'rxjs';
import {
  TYPE_GET_POST,
  getPostSucceeded,
  getPostFailed
} from '../actions/helloWorld';

export function helloWorldEpic(action$) {
  return action$.ofType(TYPE_GET_POST).switchMap(action$ =>
    Observable.ajax
      .getJSON(`https://jsonplaceholder.typicode.com/posts/${action$.payload.id}`)
      .map(post => getPostSucceeded(post))
      .catch(error => Observable.of(getPostFailed(error)))
  );
}
