import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import './Home.css';


const Home = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get('http://localhost:3002/api/get');
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (id) => {
        if(window.confirm ('Are you sure you want to DELETE your contact?')) {
            axios.delete(`http://localhost:3002/api/remove/${id}`);
            toast.success('Contact deleted successfully');

            const newData = data.filter((item) => {
                return item.id !== id;
            })
            return newData;
            // setTimeout(() => {
            //     newData;                
            // }, 1000);
        }
    }
    

    return ( 
        <div className='main'>
            <Link to='/addContact'>
                <button className='btn btn-contact'>Add Contact</button>
            </Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='table-rows'>ID#</th>
                        <th className='table-rows'>Name</th>
                        <th className='table-rows'>Email</th>
                        <th className='table-rows'>Contact</th>
                        <th className='table-rows'>Action</th>

                    </tr>
                </thead>
                <tbody>
                    
                    {data.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th scope='row' className='rows'>
                                    {index+1}
                                </th>
                                <td className='rows'>{item.name}</td>
                                <td className='rows'>{item.email}</td>
                                <td className='rows'>{item.contact}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}>
                                        <button className='btn edit-btn'>Edit</button>
                                    </Link>
                                    <Link to={`/view/${item.id}`}>
                                        <button className='btn view-btn'>View</button>
                                    </Link>
                                    <Link to={'/'}>
                                        <button 
                                            className='btn delete-btn' 
                                            onClick={deleteContact}
                                            >
                                                Delete
                                        </button>
                                    </Link>
                                </td>

                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
 
export default Home;