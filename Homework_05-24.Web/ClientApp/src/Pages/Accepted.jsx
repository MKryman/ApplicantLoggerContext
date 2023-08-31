import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StatusTables from '../Components/StatusTables';

const Accepted = () => {

    // const [accepted, setAccepted] = useState([]);

    // useEffect(() => {
    //     const getAccepted = async () => {
    //         setAccepted(await axios.get(`/api/applicant/getall?status=accepted`));
    //     };
    //     getAccepted();
    // }, []);

    return (
        <div className='container' style={{ marginTop: 80 }}>
            <div className='d-flex justify-content-center'>
                <h1>Accepted</h1>
            </div>
            <StatusTables applicantStatus={'accepted'} />
        </div>
    )
}

export default Accepted;