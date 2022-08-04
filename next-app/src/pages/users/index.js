import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ProviderLayout from '@/components/Layouts/ProviderLayout';
import { wrapper } from '@/lib/store';
import { END } from 'redux-saga';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAction } from '@/lib/actions/user_actions';
import { NextPage } from 'next';
const Users = () => {
    const userDataStore = useSelector(state => state.usersDataStore);
    const dispatch = useDispatch();
    console.log("usersData", userDataStore);

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Users
                </h2>
            }>

            <Head>
                <title>Users - Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {
                                userDataStore.users && userDataStore.users.map((user, i) => <p key={i}>{user.name}</p>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//     async ({ store, req }) => {
//         // Dispatch regular redux-saga action
//         store.dispatch(fetchUsersAction());

//         // Stop the saga
//         store.dispatch(END);
//         await store.sagaTask.toPromise();
//     }
// );

export const getServerSideProps = wrapper.getServerSideProps(store => ({ req, res, ...etc }) => {

    store.dispatch(fetchUsersAction());

});

export default Users
