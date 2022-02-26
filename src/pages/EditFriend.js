import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Layouts from '../Components/Layouts';
import swal from 'sweetalert';

const config = require('../config.json');

export default function EditFriend() {
  //1. state / variable
  const [friend,setFriend] = useState({
    data:{
      attributes:{
        Name:'',
        Class:''
      }
    }
  });

  const [isload,setIsload] = useState(false);
  const [hide,setHide] = useState('');

useEffect(()=>{
  console.log('edit load page')
  getFriends(params.fri_id);
},[])
  let params = useParams();
 

  //2. funcions

  let getFriends = (fri_id=1)=>{// e = event //ES6 Fat arrow functions // default argument
    console.log(config.dev_url);
    console.log(`${config.dev_url}/api/friends/`+fri_id);
    console.log('good morning')
    //Alway wrap the api calling code inside trycatch block
    try {
        //Call the api
        // Fetch API
        //AXIOS

        //What is the api
        //Fetch API with Promise Chain
        fetch(`${config.dev_url}/api/friends/`+fri_id)
        .then((data)=>{
        //let make data json readable
        return data.json();
        }).then((data)=>{
        console.log(data);

        //Set karne se pahle
        //console.log('before set',friends);
        //not set the friends data in friends hook variable
        
        setFriend(data);
        //Set karne ke baad data kya hai
          //console.log('hhhhhhhhhhhh')

        //array.map(function(currentValue, index, arr));
        //PaginationItem()
        
        
        }).catch((err)=>{
            console.log(err);
        });


    } catch (error) {
    console.log(error)
    }
}

  let handleChange1 =(e)=>{
    console.log('name change');
    console.log(params.fri_id);
    console.log(e.target.value);
    setFriend({
      ...friend,
      data:{
        attributes:{
          Name:e.target.value
        }
      }
    })
  }

  let submitFriend = (e)=>{
    e.preventDefault();
    console.log('submitFriend');

    setIsload(true);

    setHide('disabled');
     try {
      //Call the api
      // Fetch API
      //AXIOS
      let data = {  //JSON Javascript Object Notation
        "data": {
          "Name": friend.data.attributes.Name
        }
    };
      //Fetch API with Promise Chain
      fetch(`${config.dev_url}/api/friends/${params.fri_id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((data)=>{
      //let make data json readable
      return data.json();
      }).then((data)=>{
      console.log(data);

      //Set karne se pahle
      //console.log('before set',friends);
      //not set the friends data in friends hook variable
      
      setFriend(data);
      //Set karne ke baad data kya hai
        setIsload(false);

        setHide('');

        swal("Good job!", "Friend Edit Succefully", "success");
        window.location.reload();

      //array.map(function(currentValue, index, arr));
      //PaginationItem()
      
      
      }).catch((err)=>{
          console.log(err);
      });


  } catch (error) {
  console.log(error)
  } 
  }

 /*  let handleChange2 =(e)=>{
    console.log('name change');
    setFriend({
      ...friend,
      data:{
        attributes:{
          Class:e.target.value
        }
      }
    })
  } */

  //3.return statement

  return (
      <>
      <Layouts>
        {
          isload && 
          <div className="d-flex justify-content-center mt-4">
            <Spinner animation="border" variant="success" />
          </div>
        }
          <div className="k_main1">
            <h1 className="text-center mt-3 mb-3">Edit Form</h1>
              <div className="container text-center">
                <div className="row">
                  <form onSubmit={(e)=>{submitFriend(e)}}>
                      <label className="mb-3">Friend Name:
                        <input type="text" name="Name" value={friend.data.attributes.Name} onChange={(e) => {handleChange1(e)}}/>
                      </label>
                      <br />
                      {/* <label className="mb-3">Class:
                        <input type="text" name="Class" onChange={(e) =>{handleChange2(e)}} value={friend.data.attributes.Class}/> 
                      </label> */}
                      <br />
                        <input className={`btn btn-primary ${hide} `} type="submit" />
                  </form>
                </div>
              </div>
          </div>
      </Layouts>
        
      </>
  )
}
