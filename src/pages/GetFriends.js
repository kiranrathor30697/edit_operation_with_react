import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom'
import Layouts from '../Components/Layouts'

const config = require('../config.json');

export default function Getfriends() {
    //1. State/Hooks Variable
    const [friends,setFriends] = useState({
        data:[]
      });//Empty Array

    let param = useParams()

    useEffect(()=>{
        console.log("Page loadded succfully");
        getFriends();
    },[]);
    //2. Function defination
    let getFriends = (pageno=1)=>{// e = event //ES6 Fat arrow functions // default argument
        console.log(config.dev_url);
        console.log('good morning')
        //Alway wrap the api calling code inside trycatch block
        try {
            //Call the api
            // Fetch API
            //AXIOS

            //What is the api
            //Fetch API with Promise Chain
            fetch(`${config.dev_url}/api/friends?pagination[page]=${pageno}&pagination[pageSize]=10`)
            .then((data)=>{
            //let make data json readable
            return data.json();
            }).then((data)=>{
            console.log(data);

            //Set karne se pahle
            //console.log('before set',friends);
            //not set the friends data in friends hook variable
            
            setFriends(data);
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
        <Layouts>
            <h1>GetFriends {param.stu_id} {param.id} </h1>
            <h1 className="d-flex justify-content-center">Read Operation with Pagination</h1>
            <div className="d-flex justify-content-center">
                <Button onClick={(e)=>{ getFriends() }}>Get My Friends</Button>
            </div>
        
            <br />
            <br />
                {
                friends.data.length > 0 &&
                <React.Fragment>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Friend Name</th>
                        <th>Friend Surname</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        friends.data.map(function(currentValue, index, arr){
                            console.log(arr[index].id);
                            console.log(arr[index].attributes.Name);
                            return (
                                <tr key={index}>
                                <td>{arr[index].id}</td>
                                <td>{arr[index].attributes.Name}</td>
                                <td>{arr[index].attributes.Class}</td>
                                <td>
                                    <Button variant="success" size="sm">View</Button>&nbsp;
                                    <NavLink to={`/edit_friends/${arr[index].id}`} variant="primary" size="sm">Edit</NavLink>&nbsp;
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
        </Layouts>
        
    )
}