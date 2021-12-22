import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import Table from './Table.jsx'
import List from './List.jsx'

function Adapter(properties) {
    return (
        <>
            <BrowserView>
                <Table setMessageTarget={properties.setMessageTarget} />
            </BrowserView>
            <MobileView>
                <List setMessageTarget={properties.setMessageTarget} />
            </MobileView>
        </>
    );
};

export default Adapter;
