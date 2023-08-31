import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const StatusTables = ({ applicantStatus }) => {

    const [viewNotes, setViewNotes] = useState(true);
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        const getApplicants = async () => {
            const { data } = (await axios.get(`/api/applicant/getall?status=${applicantStatus}`));
            setApplicants(data);
            console.log(applicants);
        }
        getApplicants();
    }, []);

    return (
        <>
            <button className='btn btn-dark mb-4' onClick={() => setViewNotes(!viewNotes)}>Toggle Notes</button>
            <table className='table table-hover table-striped table-bordered'>
                <thead>
                    <tr>
                        {applicantStatus === 'pending'?  <th></th> : ''}
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        {!!viewNotes && <th>Notes</th>}
                    </tr>
                </thead>
                <tbody>
                    {applicants.map((p) => (
                        < tr key={p.id}>
                            {applicantStatus === 'pending' ? <td><Link to={`../applicantdetails/${p.id}`}>
                                View Details
                            </Link>
                            </td> : ''}
                            <td>{p.name}</td>
                            <td>{p.phone}</td>
                            <td>{p.email}</td>
                            {!!viewNotes && <td>{p.notes}</td>}
                        </tr>
                    ))}
                </tbody>
            </table >
        </>
    )
}


export default StatusTables;