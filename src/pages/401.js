import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

export default function UnAuthorizedPage() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>UnAuthorizedPage</title>
            </Head>

            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <h1>UnAuthorized</h1>
                    {
                        user.role && <Link href={user.role == 'provider_admin' ? '/provider' : user.role == 'admin' || user.role == 'super_admin' ? '/admin' : '/'}>
                            <a className="ml-4 text-sm text-gray-700 underline">
                                Goto my dashboard
                            </a>
                        </Link>
                    }
                </div>
            </div>
        </>
    )
}
