"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

const BookPage = () => {
    const [messages, setMessages] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // useEffect(() => {
    //     const getMessages = async () => {
    //         try {
    //             const { data, error } = await supabase
    //                 .from('messages')
    //                 .select();

    //             if (error) {
    //                 throw error;
    //             }

    //             if (data) {
    //                 setMessages(data);
    //                 setIsLoading(false)
    //             }
    //         } catch (error: any) {
    //             console.error('Error fetching messages:', error.message);
    //             setIsLoading(false)
    //         }
    //     };

    //     getMessages();
    // }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <div className='w-full flex flex-col items-center font-garamond p-4 mt-10 gap-10'>
            <div className="">
            <p className='text-white text-xl text-glow'>Join Telegram to see the Writen Names:</p>
            <Link href="https://t.me/kira_messages" className='text-blue-300 text-xl text-glow' target='_blank' rel='noopener noreferrer'>t.me/kira_messages {`(Click here)`}</Link>
            </div>
            <img src="/images/kira-telegram.png" alt="kira-website" className='max-h-full' />
            {/* {isLoading && (
                <p className='text-white text-xl text-glow'>Loading...</p>
            )}
            {messages.slice().reverse().map((item, index) => (
                <p key={index} className='text-white text-xl text-glow'>{item.message}</p>
            ))} */}
        </div>
    );
}

export default BookPage;
