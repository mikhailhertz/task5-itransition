import React from 'react';

function Tabs(props) {
    const onClickEventHandler = event => {
        props.setActiveTab(event.target.innerHTML);
    }
    return (
        <ul className='nav nav-tabs justify-content-center'>
            <li className='nav-item'>
                <button type='button' className={props.activeTab === 'Users' ? 'nav-link active' : 'nav-link'} onClick={onClickEventHandler}>Users</button>
            </li>
            <li className='nav-item'>
                <button type='button' className={props.activeTab === 'Messages' ? 'nav-link active' : 'nav-link'} onClick={onClickEventHandler}>Messages</button>
            </li>
        </ul>
    );
}

export default Tabs;
