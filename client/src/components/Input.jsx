import React from 'react';

function Input(properties) {
    const handleOnSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:9000/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({'to': properties.messageTarget, 'message': event.target.message.value})
        })
        .catch(error => console.log(error));
        properties.setMessageTarget(null);
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <textarea class='form-control mb-3' id='message' placeholder='Send a message...'></textarea>
            <button type='submit' className='btn btn-success'>Send</button>
        </form>
    )
}

export default Input;
