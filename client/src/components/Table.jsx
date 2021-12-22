import React, { useState, useEffect } from 'react';
import fetchRows from './fetchRows.js'

function FetchAndRenderRows() {
    const [rows, setRows] = useState([]);
    const dateTimeFormat = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    useEffect(() => {
        fetchRows(setRows);
    }, []);
    return rows.map(row =>
        <tr>
            <td className='align-middle'>{row.user_id}</td>
            <td className='align-middle'><button type='button' className='btn btn-link' disabled={row.blocked}>{row.username}</button></td>
            <td className='align-middle'>{row.email}</td>
            <td className='align-middle'>{new Date(row.created_at).toLocaleDateString(undefined, dateTimeFormat)}</td>
            <td className='align-middle'>{new Date(row.last_login).toLocaleDateString(undefined, dateTimeFormat)}</td>
            <td className='align-middle'>{(row.blocked) ? 'blocked' : ''}</td>
        </tr>
    );
}

function Table() {
    return (
        <table className='table mt-3'>
            <thead>
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Registration date</th>
                    <th scope='col'>Last online</th>
                    <th scope='col'>Status</th>
                </tr>
            </thead>
            <tbody>
                {FetchAndRenderRows()}
            </tbody>
        </table>
    );
}

export default Table;