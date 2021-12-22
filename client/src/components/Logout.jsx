import React from 'react';

const Logout = () => {
    return (
        <button type='button' className='btn btn-primary' onClick={() => window.location.replace('/logout')}>
            Log Out
        </button>
    );
};

export default Logout;