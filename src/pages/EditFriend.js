import React from 'react'

export default function EditFriend() {
  return (
      <>
        <div>EditFriend</div>
        <div class="k_main1">
          <h1 className="text-center mt-3 mb-3">Login Form</h1>
            <div class="container k_tblr text-center">
              <div class="row k_tblr recommendedfotyou">
                <form>
                    <label className="mb-3">Friend Name:
                      <input type="text" name="name"/>
                    </label>
                    <br />
                    <label className="mb-3">Friend Surname:
                      <input type="number" name="surname" />
                    </label>
                    <br />
                      <input type="submit" />
                </form>
              </div>
            </div>
        </div>
        
      </>
  )
}
