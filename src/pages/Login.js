import axios from 'axios';
import React,{useState} from 'react'
import Layouts from '../Components/Layouts'
import '../CSS/style.css'

export default function Login() {

  //1 States/variable
  const [identifier,setIdentifier] = useState('');
  const [password,setPassword] = useState('');

  //2 funcions

  let logIn = (e)=>{
    e.preventDefault();
    console.log('loginnnnnnnnnn');
    //call the API(application programming interface)
    
     try {
      axios
        .post('http://localhost:1337/api/auth/local', {
          identifier: e.target.value,
          password: e.target.value
        })
        .then(response => {
          // Handle success.
          console.log('Well done!');
          console.log('User profile', response.data.user);
          console.log('User token', response.data.jwt);
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error.response);
        });
    } catch (error) {
      
    } 
  }

  //3 retunstatements
  return (

    <Layouts>
      <h1 className="text-center mb-4 mt-3">Login From</h1>
        <form className="offset-4 col-4" onSubmit={(e)=>{logIn(e)}}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"><h6>Email</h6></label>
            <input type="email" autoFocus className="form-control" id="email" name="identifier" onChange={(e)=>{setIdentifier(e.target.value);}} value={identifier} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={(e)=>{setPassword(e.target.value);}} value={password} required/>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>

        
    </Layouts>
  )
}
