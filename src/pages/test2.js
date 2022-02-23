import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom'
import Layout from '../components/Layout'

const config = require('../config.json');

export default function GetStudent() {
    //1. State/Hooks Variable
    const [student,setStudent] = useState({
        data:[]
      });//Empty Array

    let param = useParams()

    useEffect(()=>{
        console.log("Page loadded succfully");
        getStudents();
    },[]);
    //2. Function defination
    let getStudents = (pageno=1)=>{// e = event //ES6 Fat arrow functions // default argument
        console.log(config.base_url);
        console.log('good morning')
        //Alway wrap the api calling code inside trycatch block
        try {
            //Call the api
            // Fetch API
            //AXIOS

            //What is the api
            //Fetch API with Promise Chain
            fetch(`${config.base_url}/api/friends?pagination[page]=${pageno}&pagination[pageSize]=10`)
            .then((data)=>{
            //let make data json readable
            return data.json();
            }).then((data)=>{
            console.log(data);

            //Set karne se pahle
            //console.log('before set',student);
            //not set the student data in student hook variable
            
            setStudent(data);
            //Set karne ke baad data kya hai


            //array.map(function(currentValue, index, arr));
            //PaginationItem()
            
            
            }).catch((err)=>{
                console.log(err);
            });


        } catch (error) {
        console.log(error)
        }
    }

    //3. REturn statement JSX
    return (
        <Layout>
            <h1>GetStudent {param.stu_id} {param.id} </h1>
            <h1 className="d-flex justify-content-center">Read Operation with Pagination</h1>
            <div className="d-flex justify-content-center">
                <Button onClick={(e)=>{ getStudents() }}>Get My Friends</Button>
            </div>
        
            <br />
            <br />
                {
                student.data.length > 0 &&
                <React.Fragment>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Friend Name</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        student.data.map(function(currentValue, index, arr){
                            console.log(arr[index].id);
                            console.log(arr[index].attributes.name);
                            return (
                                <tr key={index}>
                                <td>{arr[index].id}</td>
                                <td>{arr[index].attributes.name}</td>
                                <td>
                                    <Button variant="success" size="sm">View</Button>&nbsp;
                                    <NavLink to={`/edit_student/${arr[index].id}`} variant="primary" size="sm">Edit</NavLink>&nbsp;
                                    <Button variant="danger" size="sm">Delete</Button>
                                </td>
                                </tr>
                            )//JSX
                        })
                        }
                        

                    </tbody>
                    </Table>
                    
                </React.Fragment>
            }
        </Layout>
        
    )
}