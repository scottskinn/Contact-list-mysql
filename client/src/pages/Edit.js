import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import "./Edit.css";

const initialState = {
    name: "",
    email: "",
    contact: ""
};


const Edit = () => {
    const [state, setState] = useState(initialState);

    const { name, email, contact } = state;

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/api/get/${id}`).then(response => {
                setState({ ...response.data });
            });
        }
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !contact) {
            toast.error("Please fill all the fields");
        } else {
            if (!id) {
                axios.post('http://localhost:3001/api/post', {
                    name,
                    email,
                    contact
                }).then(() => {
                    setState({ name: '', email: '', contact: '' });
                }).catch((err) => {
                    console.log(err);
                });
                toast.success("Contact added successfully");
            } else {
                axios.put(`http://localhost:3001/api/update/${id}`, {
                    name,
                    email,
                    contact
                }).then(() => {
                    setState({ name: '', email: '', contact: '' });
                }).catch((err) => {
                    console.log(err);
                });
                toast.success("Contact updated successfully");
            }

            setTimeout(() => navigate('/'), 500); 
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }
 
    return (
        <div className="main">
            <form className="form" onSubmit={handleSubmit}>
                {/* Name */}
                <label htmlFor="name">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
                value={name || ''}
                onChange={handleInputChange}
                />
                {/* Email */}
                <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={email || ''}
                onChange={handleInputChange}
                />
                {/* Contact */}
                <label htmlFor="contact">Contact</label>
                <input
                type="number"
                id="contact"
                name="contact"
                placeholder="Enter Contact #"
                value={contact || ''}
                onChange={handleInputChange}
                />
                <input type="submit" value={id ? "Update" : "Save"} />
                <Link to='/'>
                    <input type='button' value='Go Back' />
                </Link>
            </form>
        </div>
    );
};

export default Edit;
