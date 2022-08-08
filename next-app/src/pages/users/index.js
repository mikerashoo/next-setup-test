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
import axios from '@/lib/axios';
import { addUser, addUsers, setUsers } from '@/lib/store slices/usersSlice';
import useSWR from 'swr';
import Button from '@/components/Button'

const Users = () => {
    const { users } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const onAddUser = () => {
        let user = {
            name: "Biniam"
        };

        dispatch(addUser(user));
    }
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
                                users && users.map((user, i) => <p key={i}>{user.name}</p>)
                            }
                        </div>
                        <Button onClick={onAddUser}>Add user</Button>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
        const response = await axios(`/api/users`
        );
        const data = await response.data;
        // console.log(data);
        store.dispatch(setUsers(data));

    })


export default Users;