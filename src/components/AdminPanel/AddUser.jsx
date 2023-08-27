import React from 'react';



const AddUser = ()=> {
  return (
    <section className='form-section'>
    <div className='container form-section-container'>
      <h2>Add User</h2>
      

      <form action="">
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
        
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Create Password' />
        <input type="password" placeholder='Confirm Password' />

        <select>
            <option value="0">Admin</option>
            <option value="1">Author</option>
        </select>
        

          <div className='form-control'>
          <label htmlFor="profile-img">Upload Profile Image</label>
          <input type="file"  id="upload-img" />
        </div>

        <button type='submit' className='btn'>Add User</button>
        
        </form>

    </div>
  </section>



    );
}

export default AddUser; 
