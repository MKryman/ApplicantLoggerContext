import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StatusTables from '../Components/StatusTables';


const Pending = () => {

    // const [pending, setPending] = useState([]);

    // useEffect(() => {
    //     const getPending = async () => {
    //         const {data} = await axios.get(`/api/applicant/getall?status=0`);
    //         setPending(data);
    //         console.log(pending);
    //     };
    //     getPending();
    // }, []);

    return (
        <div className='container' style={{ marginTop: 80 }}>
            <div className='d-flex justify-content-center'>
                <h1>Pending</h1>
            </div>
            <StatusTables applicantStatus={'pending'} />
        </div>
    )
}

export default Pending;