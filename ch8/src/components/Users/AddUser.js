import React, {useState} from 'react'

const AddUser = (props) => {

  return (
    <div>
    <form>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text'/>
       
            <label htmlFor='age'>Age (Years)</label>
            <input id='age' type='text'/>
        
        <button type='submit'>Add New User</button>
    </form>
      
    </div>
  )
}

export default AddUser
