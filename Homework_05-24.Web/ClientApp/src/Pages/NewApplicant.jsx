import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UseApplicantStatus } from '../ApplicantContext';


const NewApplicant = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [notes, setNotes] = useState('');

    const { refreshData } = UseApplicantStatus();

    const navigate = useNavigate();

    const addApplicant = async () => {
        const { applicant } = await axios.post('/api/applicant/newapplicant',
            { name, email, phone: phoneNumber, notes, status: 'Pending' });
        console.log(applicant);
        await refreshData();
        navigate('/accepted');
    }


    return (
        <div className='container' style={{ marginTop: 140 }}>
            <div className='row' style={{ marginTop: 20 }}>
                <div className='col-md-6 offset-md-3'>
                    <div className='card-body bg-light'>
                        <h4>New Applicant</h4>
                        <form>
                            <input type='text' name='name' placeholder='Name' value={name} className='form-control' onChange={e => (setName(e.target.value))} />
                            <br />
                            <input type='text' name='email' placeholder='Email' value={email} className='form-control' onChange={e => (setEmail(e.target.value))} />
                            <br />
                            <input type='text' name='phoneNumber' placeholder='Phone Number' value={phoneNumber} className='form-control' onChange={e => (setPhoneNumber(e.target.value))} />
                            <br />
                            <textarea rows={5} className='form-control' name='notes' value={notes} onChange={e => (setNotes(e.target.value))} />
                            <br />
                            <button className='btn btn-primary' type="submit" onClick={addApplicant}>Add Applicant</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewApplicant;