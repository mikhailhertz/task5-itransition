import React from 'react';

function Tabs(properties) {
    const onClickEventHandler = event => {
        properties.setActiveTab(event.target.innerHTML);
    }
    return (
        <ul className='nav nav-tabs justify-content-center'>
            <li className='nav-item'>
                <button type='button' className={properties.activeTab === 'Users' ? 'nav-link active' : 'nav-link'} onClick={onClickEventHandler}>Users</button>
            </li>
            <li className='nav-item'>
                <button type='button' className={properties.activeTab === 'Messages' ? 'nav-link active' : 'nav-link'} onClick={onClickEventHandler}>Messages</button>
            </li>
        </ul>
    );
}

export default Tabs;
