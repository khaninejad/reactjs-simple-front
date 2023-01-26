import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Button } from '@mui/material';
import configuration from '../../shared/config';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState({ first_name: '', last_name: '', address:'', job_title: '', department: '' });
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${configuration().api_url}api/employee/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setEmployee(res.data);
            } catch (err) {
                setError(err.response.data.message);
            }
        }
        fetchData();
    }, [token, id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.patch(`${configuration().api_url}api/employee/${id}`,
                employee,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            setEmployee(res.data);
            navigate("/list-employee");
        } catch (err) {
            setError(err.response.data.message);
        }
    }

    return (
        <form>
            {error && <p>{error}</p>}
            <Input label="First Name" value={employee.first_name} onChange={e => setEmployee({ ...employee, first_name: e.target.value })} />
            <Input label="Last Name" value={employee.last_name} onChange={e => setEmployee({ ...employee, last_name: e.target.value })} />
            <Input label="Address" value={employee.address} onChange={e => setEmployee({ ...employee, address: e.target.value })} />
            <Input label="job_title" value={employee.job_title} onChange={e => setEmployee({ ...employee, job_title: e.target.value })} />
            <Button onClick={handleSubmit}>Save</Button>
        </form>
    );
};

export default EditEmployee;