import { all } from 'redux-saga/effects';
import { usersSaga } from './usersSaga';

export default function* rootSaga() {
    try {
        yield all([
            usersSaga(),
        ]);
    } catch (err) {
        console.log(err);
    }
}