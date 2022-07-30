import React, { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import './View.css';

const View = () => {
    const [user , setUser] = useState([]);

    const { id } = useParams();

    useEffect(() => {
            axios.get(`http://localhost:3001/api/get/${id}`)
            .then(response => {
                setUser({ ...response.data[0] });
            });
    }, [id])

    return ( 
        <div className="main">
            <div className="card">
                <div className="card-header">
                    <h2>Contact Detail</h2>
                </div>

                <div className="container">
                    <strong>ID:</strong>
                    <span>{id}</span>
                    <br />
                    <strong>Name:</strong>
                    <span>{user.name}</span>
                    <br />
                    <strong>Email:</strong>
                    <span>{user.email}</span>
                    <br />
                    <strong>Contact:</strong>
                    <span>{user.contact}</span>
                    <br />

                    <Link to='/'>
                    <button className="btn btn-view">Go Back</button>
                    </Link>
                </div>

            </div>
        </div>
     );
}
 
export default View;
