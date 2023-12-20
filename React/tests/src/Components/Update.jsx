import React, { useEffect, useState } from 'react'
import './Update.css'
import { useSelector } from 'react-redux'
import { getProfile, updateProfile } from './Apicall'

const Update = () => {

  const [FirstName, setFirstName] = useState()
  const [SecondName, setSecondName] = useState('')
  const [Age, setAge] = useState('')
  const [Address, setAddress] = useState('')
  const [Email, setEmail] = useState('')
  console.log('********1*', FirstName);
  // const [Password, setPassword] = useState("")
  // const [id, setId] = useState("")
  // console.log('idddddd',id);

  const value = useSelector((state) => state.users.userInfo[0])
  // console.log('valueeeeeeeee', value);
  

  if (value) {
    var IIId = value && value._id
    console.log('idddddd', IIId);

  }

  useEffect(() => {
    // setId(value.id)

    async function profileDisplay() {
      const dataaupdate = await getProfile(IIId)
      console.log('updatyteegfdj', dataaupdate);
      const data123 = dataaupdate.data

      setFirstName(data123.FirstName);
      setSecondName(data123.SecondName || '');
      setAge(data123.Age);
      setAddress(data123.Address)
      setEmail(data123.Email)


    } profileDisplay()

    // setFirstName(value.FirstName || '');
    // setSecondName(value.SecondName || '');
    // setAge(value.Age);
    // setAddress(value.Address);
    // setEmail(value.Email || '');
    // setPassword(value.Password);
  }, [])

  const updateValue = async () => {
    try {
      console.log("updateeeee", IIId);
      const data111 = await updateProfile({ _id: IIId, FirstName, SecondName, Age, Address, Email });
      // console.log('Updated successfully!');
      console.log('data1111', data111);
      console.log('*******', FirstName);

    } catch (err) {
      console.error('Update failed:', err);
    }
  };


  return (
    <div>
      <div className='main'>
        <div className='profileDisplay-head'>
          <h2>Update</h2>
          <div className='profileDisplay-details'>

            <input type="text" placeholder='firstname' value={FirstName} onChange={(e) => setFirstName(e.target.value)} className='.inp1' />
            <input type="text" placeholder='SecondName' value={SecondName} onChange={(e) => setSecondName(e.target.value)} className='inp2' />
            <input type="text" placeholder='age' value={Age} onChange={(e) => setAge(e.target.value)} className='inp3' />
            <input type="text" placeholder='address' value={Address} onChange={(e) => setAddress(e.target.value)} className='inp4' />
            <input type="email" placeholder='email' value={Email} onChange={(e) => setEmail(e.target.value)} className='inp5' />
            {/* <input type="password" placeholder='password' value={Password} onChange={(e) => setPassword(e.target.value)} /> */}
            <button className='U-btn' onClick={updateValue} > Update</button>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Update