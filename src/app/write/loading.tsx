import LoadingIcon from '@/components/icon/loadingIcon'
import React from 'react'

const LoadingPage = () => {
    return (
        <div className='absolute left-0 top-0 w-full h-dvh flex items-center justify-center'>
            <div className="w-fit h-fit animate-spin">
                <LoadingIcon />
            </div>
        </div>
    )
}

export default LoadingPage
