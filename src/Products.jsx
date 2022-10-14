import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { env } from './Config';

function Users() {

    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        loadData()
    }, [])


    let loadData = async () => {
        setLoading(true)
        let users = await axios.get(`${env.api}/teachers`);
        console.log(users)
        setUsers(users.data)
        setLoading(false)
    };

    let userDelete = async (id) => {
        try {
            let ask = window.confirm("Are you sure? Do you want to delete this data?");
            if (ask) {
                await axios.delete(`${env.api}/teacher/${id}`)
                loadData()
            }

        } catch (error) {

        }
    }
    return (
        <div class="container-fluid">

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800"><b>Teachers</b></h1>
                <Link to="/portal/createbook" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Add Teacher</Link>
            </div>

            {
                isLoading ? <span>Loading...</span> : <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Teachers List</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>subject</th>
                                        <th>Rating</th>
                                        <th>ph number</th>
                                        <th>Start Date</th>
                                        <th>salary</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>subject</th>
                                        <th>Rating</th>
                                        <th>pages</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        users.map((user, index) => {
                                            return <tr>
                                                <td>{index + 1}</td>
                                                <td>{user.name}</td>
                                                <td>{user.position}</td>
                                                <td>{user.office}</td>
                                                <td>{user.age}</td>
                                                <td>{user.statDate}</td>
                                                <td>${user.salary}</td>
                                                <td>
                                                    <Link to={`/portal/products/${user._id}`} className='btn btn-sm btn-primary mr-1'>View</Link>
                                                    <Link to={`/portal/product/edit/${user._id}`} className='btn btn-sm btn-success mr-1'>Edite</Link>
                                                    <button onClick={() => userDelete(user._id)} className='btn btn-sm btn-danger mr-1'>Delete</button>
                                                </td>

                                            </tr>


                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }

            {/* <!-- DataTales Example --> */}


        </div>
    )
}

export default Users;
