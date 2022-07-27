import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import './Home.css';

const Home = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get('http://localhost:3001/api/get');
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    return ( 
        <div className='main'>
            <table>
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
                                <th scope='row'>{index+1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}>
                                        <button className='btn edit-btn'>Edit</button>
                                    </Link>
                                    <button className='btn delete-btn'>Delete</button>
                                    <Link to={`/view/${item.id}`}>
                                        <button className='btn view-btn'>View</button>
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