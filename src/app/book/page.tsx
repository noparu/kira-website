"use client"
import { useState, useEffect } from 'react';
import { supabase } from "@/lib/supabase";

const BookPage = () => {
    const [messages, setMessages] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const { data, error } = await supabase
                    .from('messages')
                    .select();

                if (error) {
                    throw error;
                }

                if (data) {
                    setMessages(data);
                    setIsLoading(false)
                }
            } catch (error: any) {
                console.error('Error fetching messages:', error.message);
                setIsLoading(false)
            }
        };

        getMessages();
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <div className='w-full flex flex-col items-center font-garamond p-4 mt-10'>
            {isLoading && (
                <p className='text-white text-xl text-glow'>Loading...</p>
            )}
            {messages.slice().reverse().map((item, index) => (
                <p key={index} className='text-white text-xl text-glow'>{item.message}</p>
            ))}
        </div>
    );
}

export default BookPage;
