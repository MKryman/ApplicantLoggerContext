import React from 'react';
import Layout from './Components/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NewApplicant from './Pages/NewApplicant';
import Pending from './Pages/Pending';
import Accepted from './Pages/Accepted';
import Rejected from './Pages/Rejected';
import ApplicantDetails from './Pages/ApplicantDetails';
import { ApplicantContext } from './ApplicantContext';
import './App.css';

const App = () => {
    return (
        <ApplicantContext>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/newApplicant' element={<NewApplicant />} />
                    <Route exact path='/pending' element={<Pending />} />
                    <Route exact path='/accepted' element={<Accepted />} />
                    <Route exact path='/rejected' element={<Rejected />} />
                    <Route exact path='/applicantDetails/:id' element={<ApplicantDetails />} />
                </Routes>
            </Layout>
        </ApplicantContext>
    )
}

export default App;