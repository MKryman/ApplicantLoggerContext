import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const ApplicantStatus = createContext('');

const ApplicantContext = ({ children }) => {
    const [pending, setPending] = useState([]);
    const [accepted, setAccepted] = useState([]);
    const [rejected, setRejected] = useState([]);

    const refreshData = async () => {
        const { data } = await axios.get('/api/applicant/getcounts');
        
        setPending(data.pendingCount);
        setAccepted(data.acceptedCount);
        setRejected(data.rejectedCount);
    }

    useEffect(() => {
        refreshData();
    }, [])

    return(
        <ApplicantStatus.Provider value={{pending, accepted, rejected, refreshData}}>
            {children}
        </ApplicantStatus.Provider>
    )
}

const UseApplicantStatus = () => {
    return useContext(ApplicantStatus);
}

export {ApplicantContext, UseApplicantStatus}