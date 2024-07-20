"use client"
import React from 'react'
import { toast } from 'react-toastify';

import InputText from '@/components/input/inputText';
import ShowMessage from '@/components/alert/showMessage';

const WritePage = () => {

    const handleSubmitForm = async (e: any) => {
        e.preventDefault()
        ShowMessage('Successfully written!')
    }

    return (
        <div className='w-full h-full p-4 flex flex-col items-center justify-center text-center text-white font-garamond'>
            <div className="text-3xl sm:text-5xl text-glow">
                <p>Kira Will Deliver</p>
            </div>

            <div className="text-xl sm:text-2xl mt-5 text-glow">
                <p>Have you been wronged? Have you witnessed an</p>
                <p>unforgivable crime? Has the {"‘justice system’"} failed</p>
                <p>to bring the vermin of this world to justice?</p>
            </div>

            <div className="text-xl sm:text-2xl mt-7 text-glow">
                <p>Do you want justice?</p>
            </div>

            <div className="text-xl sm:text-2xl mt-7 text-glow">
                <p>All Kira needs is a name</p>
            </div>

            <form onSubmit={handleSubmitForm} className="mt-12 relative">
                <InputText
                    className="w-[300px] sm:w-[400px] outline-none border-b border-white bg-transparent pr-12 text-xl"
                />
                <button type='submit' className='absolute right-0 top-0 bottom-0 text-xl -mt-1 text-glow outline-none'>Send</button>
            </form>
        </div>
    )
}

export default WritePage
