import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [user,setUser]=useState(
        {
        Name: '', Email: '',Subject: '', Message : ''
        }
    )

    let name, value
    const data = (e) =>
    {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value})
    }
  return (
    <div>
        <div className='Contact-container'>
            <div className='ct-content'>
                <h2># contact us</h2>
                <div className='form'>
                    <form action="" method='POST'>
                        <input type="text" name='Name' value={user.Name} placeholder='Enter Your Full Name' required autoComplete='off'onChange={data}/>
                        <input type="email" name='Email' value={user.Email} placeholder='Enter Your Email ' autoComplete='off'onChange={data}/>
                        <input type="text" name='Subject' value={user.Subject} placeholder='Enter Your Subject' autoComplete='off'onChange={data}/>
                        <textarea name="Message" value={user.Message} placeholder='Your Message' autoComplete='off'onChange={data}></textarea>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact