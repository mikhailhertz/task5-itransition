import React, { useState } from 'react';
import Header from '../components/Header.jsx'
import Tabs from '../components/Tabs.jsx'
import Adapter from '../components/Adapter.jsx'
import Messages from '../components/Messages.jsx'
import Footer from '../components/Footer.jsx'
import Input from '../components/Input.jsx'

function Home() {
    const [activeTab, setActiveTab] = useState('Users');
    const [messageTarget, setMessageTarget] = useState(null);
    const elementMap = new Map([['Users', <Adapter setMessageTarget={setMessageTarget} />], ['Messages', <Messages />]]);
    const MainInterface = () => {
        return (<>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            {elementMap.get(activeTab)}
        </>);
    }
    return (
        <div className='d-flex flex-column vh-100'>
            <Header />
            <main className='container mt-3 justify-content-center'>
                {(messageTarget == null) ? <MainInterface /> : <Input messageTarget={messageTarget} setMessageTarget={setMessageTarget} />}
            </main>
            <Footer />
        </div>
    );
};

export default Home;
