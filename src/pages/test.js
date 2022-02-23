import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'
import Layouts from '../Components/Layouts'

const config = require('../config.json')

export default function GetFriends() {
    //1.state/hook
    let param = useParams()

    const [friend,setFriend] =useState({
      data:[]
    })
    useEffect(()=>{
      console.log('page loaded successfully')
      getFriend();
    },[])

    //2.functions

    let getFriend = (pageno = 1) => {
      console.log('Click button press');
    
      //Api Call
      try {
          //return po = promise object
          fetch(`${config.dev_url}/api/friends?pagination[page]=${pageno}&pagination[pageSize]=10`)
          .then((data)=>{
            console.log('data',data);
            return data.json()
          })
    
          .then((data)=>{
            console.log(data);
            setFriend(data);
            console.log(data.data);
            console.log('final data',data);
          })
          .catch((err)=>{
            console.log(err);
          })
        } 
        catch (error) {
            console.error(error);
        }
    }

    //3.return statement
  return (
    <Layouts>
      <div>GetFriends {param.fri_id}</div>
      {
        friend.data.length > 0 &&
          <React.Fragment>
            <Table striped bordered hover>
              <thead>
                  <tr>
                  <th>Id</th>  
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  {
                  friend.data.map(function(currentValue, index, arr){
                      console.log(arr[index].id);
                      console.log(arr[index].attributes.name);
                      return (
                          <tr key={index}>
                          <td>{arr[index].id}</td>
                          <td>{arr[index].attributes.name}</td>
                          <td>{arr[index].attributes.surname}</td>
                          <td>
                              <Button variant="success" size="sm">View</Button>&nbsp;
                              <NavLink to={`/edit_friend/${arr[index].id}`} variant="primary" size="sm">Edit</NavLink>&nbsp;
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
