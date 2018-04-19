import { combineEpics } from 'redux-observable';
import { helloWorldEpic } from './helloWorld';

export const rootEpic = combineEpics(
  helloWorldEpic
);
