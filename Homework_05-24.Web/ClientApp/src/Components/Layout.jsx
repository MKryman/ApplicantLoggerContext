import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import { UseApplicantStatus } from "../ApplicantContext";

const Layout = (props) => {

    const {pending, accepted, rejected} = UseApplicantStatus();

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                    <div className="container">
                        <a className="navbar-brand" asp-area="" asp-conroller="Home" asp-action="Index">Applicant Logger</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link text-light">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/newapplicant" className="nav-link text-light">
                                        New Applicant
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/pending" className="nav-link text-light">
                                        Pending({pending})
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/accepted" className="nav-link text-light">
                                        Accepted({accepted})
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/rejected" className="nav-link text-light">
                                        Rejected({rejected})
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="container mt-3">
                {props.children}
            </div>
        </div>
    )
}

export default Layout;