import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

export default function Custom401() {
    return <h1>401 - Unauthorized</h1>
}