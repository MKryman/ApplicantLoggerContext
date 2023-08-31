import React from 'react';
import { Link } from 'react-router-dom';
import { UseApplicantStatus } from '../ApplicantContext';


const Home = () => {
    const { pending, accepted, rejected } = UseApplicantStatus();
    return (
        
        <div className='container'>
            <div className="card position-absolute top-50 start-50 translate-middle">
                <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: 40 }}>Welcome to the Applicant Logger!</h5>
                        <p className="card-text" style={{ fontSize: 25 }}>The total number of applicants is currently {pending + accepted + rejected}</p>
                        <Link to="/pending">
                            <button className='btn btn-success btn-block' type='button' style={{ fontSize: 18, width: 800}}>See All Pending Applicants</button>
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default Home;