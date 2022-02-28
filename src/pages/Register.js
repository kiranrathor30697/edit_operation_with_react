import React from 'react'
import Layouts from '../Components/Layouts'

export default function Register() {
  return (
    <Layouts>
      <h1 className="text-center mb-4 mt-3">Register From</h1>
      <form className="offset-4 col-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Please Enter your Email</label>
            <input type="text" autoFocus className="form-control" id="name" name="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="surname" className="form-label">Please Enter your Surname</label>
            <input type="text" className="form-control" id="surname" name="surname" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Please Enter your Email</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Please Enter your Password</label>
            <input type="password" className="form-control" id="password" name="password" required />
          </div>
          <div className="mb-3">
            <label htmlFor="conf_pass" className="form-label">Please Enter your Confirm Password</label>
            <input type="password" className="form-control" name="conf_pass" id="conf_pass" required />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
          
        </form>
    </Layouts>
  )
}
