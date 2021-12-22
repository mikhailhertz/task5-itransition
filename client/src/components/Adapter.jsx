import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import Table from './Table.jsx'
import List from './List.jsx'

function Adapter() {
    return (
        <>
            <BrowserView>
                <Table />
            </BrowserView>
            <MobileView>
                <List />
            </MobileView>
        </>
    );
};

export default Adapter;
