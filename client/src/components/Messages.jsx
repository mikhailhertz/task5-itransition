import React, { useState, useEffect } from 'react';

async function fetchMessages(setMessages) {
    await fetch('https://task5-itransition.herokuapp.com/api/messages')
        .then(result => result = result.json())
        .then(result => setMessages(result))
        .catch(error => console.log(error));
}

function Messages() {
    const FetchAndRenderMessages = () => {
        const [messages, setMessages] = useState([]);
        useEffect(() => {
            fetchMessages(setMessages);
        }, []);
        return messages.map(message =>
            <li className='list-group-item d-flex justify-content-between align-items-start'>
                {message.from + ': ' + message.message}
            </li>
        );
    }
    return (
        <ul className='list-group mt-3'>
            {FetchAndRenderMessages()}
        </ul>
    );
};

export default Messages;