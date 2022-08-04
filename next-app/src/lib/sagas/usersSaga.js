import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from '@/lib/axios'

import {
    fetchUsersAction,
    fetchUsersSuccessAction,
    fetchUsersErrorAction
} from '../actions/user_actions';
import user_action_types from '../actions/user_actions/types';

// Make exception for process.env
/* eslint-disable no-undef */
const nasaApiKey = process.env.NASA_API_KEY;
/* eslint-enable */

export function* fetchUsersSaga(date) {
    const url = '/api/users';
    const params = {
        api_key: nasaApiKey,
        date,
    };

    try {
        // const { users: users } = yield call([axios, 'get'], url);
        // console.log("users : ", users);


        const res = yield call(
            axios.get,
            url
        );
        console.log("users : ", res);

        yield put(fetchUsersSuccessAction(res.data));
    } catch (error) {
        yield put(fetchUsersErrorAction(error));
    }
}

export function* usersSaga() {
    yield all([
        yield takeLatest(user_action_types.FETCH_USERS_ACTION_TYPE, fetchUsersSaga),


    ])
} 
