import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import UnAuthorizedPage from '@/pages/401'

const ProviderLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })
    if (!user) {
        return <div className="min-h-screen bg-gray-100">
            Loading...
        </div>
    }

    if (user.role != 'provider_admin') {
        return <UnAuthorizedPage />
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation user={user} />

            {/* Page Heading */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>

            {/* Page Content */}
            <main>{children}</main>
        </div>
    )
}

export default ProviderLayout
