import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'

const Apps = () => {
    const router = useRouter()

    useEffect(() => {
        router.push('/')
    }, [])

    return (
        <div>Apps</div>
    )
}

export default Apps