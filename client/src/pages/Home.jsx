import React, { useState } from 'react';
import Header from '../components/Header.jsx'
import Tabs from '../components/Tabs.jsx'
import Adapter from '../components/Adapter.jsx'
import Messages from '../components/Messages.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
    const [activeTab, setActiveTab] = useState('Users');
    const elementMap = new Map([['Users', <Adapter />], ['Messages', <Messages />]]);
    return (
        <div className='d-flex flex-column vh-100'>
            <Header />
            <main className='container mt-3 justify-content-center'>
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                {elementMap.get(activeTab)}
            </main>
            <Footer />
        </div>
    );
};

export default Home;
