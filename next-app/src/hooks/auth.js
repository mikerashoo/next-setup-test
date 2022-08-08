import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useAuth = ({ middleware, redirectIfAuthenticated, role } = {}) => {
    const router = useRouter()

    const { data: user, error, mutate } = useSWR('/api/user', () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error

                router.push('/verify-email')
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const register = async ({ setErrors, ...props }) => {
        try {
            await csrf()

            setErrors([])

            axios
                .post('/register', props)
                .then(() => mutate())
                .catch(error => {
                    if (error.response.status !== 422) throw error

                    setErrors(Object.values(error.response.data.errors).flat())
                })
        }
        catch (e) {
            setErrors([process.env.UNKOWN_SERVER_ERROR_MESSAGE]);
        }
    }

    const login = async ({ setErrors, setStatus, ...props }) => {
        try {
            await csrf()

            setErrors([])
            setStatus(null)
            axios
                .post('/login', props)
                .then(() => mutate())
                .catch(error => {
                    if (error.response.status !== 422) throw error

                    setErrors(Object.values(error.response.data.errors).flat())
                })
        }
        catch (e) {
            setErrors([process.env.UNKOWN_SERVER_ERROR_MESSAGE]);
        }

    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        try {
            await csrf()

            setErrors([])
            setStatus(null)

            axios
                .post('/forgot-password', { email })
                .then(response => setStatus(response.data.status))
                .catch(error => {
                    if (error.response.status !== 422) throw error

                    setErrors(Object.values(error.response.data.errors).flat())
                })
        }
        catch (e) {
            setErrors([process.env.UNKOWN_SERVER_ERROR_MESSAGE]);
        }
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        try {
            await csrf()

            setErrors([])
            setStatus(null)

            axios
                .post('/reset-password', { token: router.query.token, ...props })
                .then(response => router.push('/login?reset=' + btoa(response.data.status)))
                .catch(error => {
                    if (error.response.status !== 422) throw error

                    setErrors(Object.values(error.response.data.errors).flat())
                })
        }
        catch (e) {
            setErrors([process.env.UNKOWN_SERVER_ERROR_MESSAGE]);
        }
    }

    const resendEmailVerification = ({ setStatus }) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (!error) {
            await axios
                .post('/logout')
                .then(() => mutate())
        }

        window.location.pathname = '/login'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user) {
            console.log("user", user);
            switch (user.role) {
                case 'admin':
                    router.push('/admin')
                    break;
                default:
                    router.push('/provider')

            }
        }


        if (middleware === 'auth' && role && user) {
            console.log("user role authentication", user);

            if (user.role != role) router.push('/401')
        }

        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}
