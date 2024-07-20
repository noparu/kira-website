import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
    return (
        <div className='w-full h-dvh flex flex-col text-white items-center gap-3 justify-center absolute left-0 top-0 p-8'>
            <p className="text-glow font-garamond text-white text-2xl">Thank you for participating in this website, “kira” will make this world a better place.</p>

            <p className='text-glow font-garamond text-white'>
                <Link href='instagram.com/ken.wakuii'>my instagram</Link>
            </p>
        </div>
    )
}

export default AboutPage
