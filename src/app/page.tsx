import Link from 'next/link'
import React from 'react'

const HomePage = () => {
    return (
        <div className='w-full h-full'>
            {/* content */}
            <div className="w-full h-full relative flex items-center justify-center text-center">
                {/* background image */}
                <div className="absolute opacity-70 left-0 right-0 top-0 bottom-0 w-full h-full flex items-center justify-center">
                    <img src='/images/kira-heart.png' className='w-[650px]' />
                </div>

                {/* text */}
                <div className="w-full z-10 font-garamond text-white">
                    {/* title */}
                    <div className="text-3xl sm:text-5xl text-glow">
                        <p>The Legend of Kira</p>
                        <p>The Saviour</p>
                    </div>

                    {/* body */}
                    <div className="text-xl sm:text-2xl mt-10 text-glow">
                        <p>Criminals worldwide</p>
                        <p>Because Kira is among us again</p>
                        <p>They are the one who will tolerate no wickedness</p>
                        <p>Our messenger from hell</p>
                        <p>Only those who believe in his existence and return</p>
                    </div>

                    <div className="text-2xl sm:text-4xl mt-10 text-glow">
                        <p>MAY ENTER</p>
                        <p>THIS SITE</p>
                    </div>

                    <div className="text-xl sm:text-2xl mt-10">
                        <Link href={"/write"} className='animate-pulse hover:animate-none text-zinc-500'>
                            <p>continue</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
