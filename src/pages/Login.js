//import area
import React,{useState} from 'react'
import Layouts from '../Components/Layouts'
import '../CSS/style.css'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

const config = require('../config.json')

export default function Login() {

  //1 States/variable
  const [user,setUser] = useState({
    identifier:'',
    password:''
  });
  const Navigate = useNavigate();

  //2 funcions
  let handle = (e)=>{
   /*  console.log('hendle'); */
    //console.log(e.target.classList.contains('k_email'));
    if(e.target.classList.contains('k_email')){
      setUser({
        //get previous value and place here
        ...user,
        //set new item
        'identifier': e.target.value
    });
    }
    if(e.target.classList.contains('k_password')){
      setUser({
        //get previous value and place here
        ...user,
        //set new item
        'password': e.target.value
    });
  }

    }

  let logIn = (e)=>{
    e.preventDefault();
    /* console.log('loginnnnnnnnnn');
    console.log(e); */
   
    var data = {
        'identifier':user.identifier,
        "password":user.password
    }
    //call the API(application programming interface)
    try {
      fetch(`${config.dev_url}/api/auth/local`,{
        method: 'POST',
        data,
        headers: { 'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data),

    })
      .then(res=>res.json())
      .then((res)=>{
        console.log(res);
        //console.log(res.error.status);

        //this is error block
         if(res.error){
          swal(" Opps!", "Email or password Wrong!", "error");
        } 
        //this is success block
          if(!res.error){
            swal("Good job!", "Your Login Success!", "success");
            localStorage.setItem('jwt',JSON.stringify(res));
            Navigate('/getfriends')
        }   
      })
      .catch((err)=>{
        console.log(err);
      })  
    } catch (error) {
      console.log(error.message);
    }
    
  }

  //3 retunstatements
  return (

    <Layouts>
      <h1 className="text-center mb-4 mt-3">Login From</h1>
        <form className="offset-4 col-4" onSubmit={(e)=>{logIn(e)}}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"><h6>Email</h6></label>
            <input type="email" autoFocus className="form-control k_email" id="identifier" name="identifier" onChange={(e)=>{handle(e);}} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control k_password" id="password" name="password" onChange={(e)=>{handle(e);}} required/>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>

        
    </Layouts>
  )
}
