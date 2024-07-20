"use client"
import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase';

import InputText from '@/components/input/inputText';
import showMessage from '@/components/alert/showMessage';
import axios from 'axios';

const WritePage = () => {
    const [message, setMessage] = useState<string>("")
    const [countdown, setCountdown] = useState(15);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleChangeMessage = (e: any) => {
        const value = e.target.value
        if (value.length <= 50) {
            setMessage(value);
        } else {
            setMessage(message.slice(0, 50))
            showMessage('Text must be no longer than 50 characters', 'error')
        }
    }

    const handleSubmitForm = async (e: any) => {
        e.preventDefault()
        const token = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
        const chatID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        try {
            setIsLoading(true)
            if (countdown > 0) {
                showMessage(`To avoid spam please wait another ${countdown} seconds`, 'error')
                setIsLoading(false)
            }
            else if (message !== '') {
                await supabase
                    .from('messages')
                    .insert({
                        message
                    })
                await axios.post(url, {
                    chat_id: chatID,
                    text: message
                })
                showMessage('Successfully written!')
                setMessage('')
                setCountdown(30)
                setIsLoading(false)
            } else {
                showMessage(`Unsuccessfully written!`, 'error')
                setIsLoading(false)
            }
        } catch (error) {
            showMessage('Unsuccessfully written!', 'error')
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown === 0) {
                    clearInterval(intervalId);
                    return 0;
                }
                return prevCountdown - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [countdown]);

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
                    name="message"
                    value={message}
                    onChange={handleChangeMessage}
                />
                <button type={isLoading ? 'button' : 'submit'} className='absolute right-0 top-0 bottom-0 text-xl -mt-1 text-glow outline-none'>Send</button>
            </form>
        </div>
    )
}

export default WritePage
