import React, { useState, useEffect } from 'react';
import fetchRows from './fetchRows.js'

function List(properties) {
    const onClickEventHandler = (event) => {
        properties.setMessageTarget(event.target.innerText);
    }
    const FetchAndRenderRows = () => {
        const [rows, setRows] = useState([]);
        useEffect(() => {
            fetchRows(setRows);
        }, []);
        return rows.map(row =>
            <li className='list-group-item d-flex justify-content-between align-items-start'>
                <div className='me-auto'>
                    <div>
                        <button type='button' className='p-0 btn btn-link fs-4' disabled={row.blocked} onClick={onClickEventHandler}>{row.username}</button>
                    </div>
                    <small className='d-inline'>
                        {row.email + ((row.blocked) ? ', ' : '')}
                        <span className='text-danger'>{(row.blocked) ? 'blocked' : ''}</span>
                    </small>
                </div>
            </li>
        );
    }
    return (
        <ul className='list-group mt-3'>
            {FetchAndRenderRows()}
        </ul>
    );
}

export default List;