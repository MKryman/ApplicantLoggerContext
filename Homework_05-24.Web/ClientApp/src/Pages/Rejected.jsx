import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StatusTables from '../Components/StatusTables';

const Rejected = () => {

    // const [rejected, setRejected] = useState([]);  

    // useEffect(() => {
    //     const getRejected = async () => {
    //         setRejected(await axios.get(`/api/applicant/getall?status=rejected`));
    //     };
    //     getRejected();
    // }, []);

    return (
        <div className='container' style={{ marginTop: 80 }}>
            <div className='d-flex justify-content-center'>
                <h1>Rejected</h1>
            </div>
            <StatusTables applicantStatus={'rejected'}/>
        </div>
    )
}

export default Rejected;