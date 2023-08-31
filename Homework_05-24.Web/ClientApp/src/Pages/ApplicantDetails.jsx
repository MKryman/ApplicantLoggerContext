import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UseApplicantStatus } from '../ApplicantContext';

const ApplicantDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { refreshData } = UseApplicantStatus();
    const [applicant, setApplicantInfo] = useState({ name: '', email: '', phone: '', notes: '', status: '' })

    useEffect(() => {
        const getElementById = async () => {

            const { data } = await axios.get(`/api/applicant/getbyid?id=${id}`);
            setApplicantInfo(data);
        }

        getElementById();
    }, []);

    const onSubmit = async status => {
        await axios.post('/api/applicant/updatestatus', { id, status });
        await refreshData();
        navigate(`/${status}`);
    }
    const { name, email, phone, notes, status } = applicant;

    return (
        <div className='container' style={{ marginTop: 200 }}>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card card-body bg-light'>
                        <h4>Name: {name}</h4>
                        <h4>Email: {email}</h4>
                        <h4>Phone Number: {phone}</h4>
                        <h5>Notes:</h5>
                        <p>{notes}</p>
                        {status === 'Pending' && <div >
                            <button className='btn btn-outline-success col-md-3 me-2' type='submit' name='accepted' onClick={e => onSubmit(e.target.name)}>Accept</button>
                            <button className='btn btn-outline-danger col-md-3 ms-2' type='submit' name='rejected' onClick={e => onSubmit(e.target.name)}>Reject</button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicantDetails;