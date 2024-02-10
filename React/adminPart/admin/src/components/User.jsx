import React, { useEffect, useState } from 'react';
import './User.css';
import { DeleteUserData, userss } from './ApiCallll/Apicall';

const User = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const Togedivata = async () => {
      try {
        const res = await userss();
        console.log('useeffect in user res data', res.data);
        setValue(res.data);
      } catch (err) {
        console.log('err', err);
      }
    };
    Togedivata();
  }, []);

  const DeleteData = async (id) => {
    console.log('delete use id', id);
    try {
      DeleteUserData(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='user'>
      <div className='main-div'>
        <table className='main-table'>
          <thead className='main-head'>
            <tr className='first-tr'>
              <th className='name-th'>Name</th>
              <th className='email-th'>Email</th>
              <th className='remove-th'>Remove</th>
            </tr>
          </thead>
          <tbody className='ctnt-div'>
            {value.map((item) => (
              <tr key={item._id}>
                <td className='name-item'>{item.Name}</td>
                <td className='email-item'>{item.Email}</td>
                <td>
                  <button onClick={() => DeleteData(item._id)} className='rmv-btn'>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;















// //import React, { useEffect, useState } from 'react'
// import './User.css'
// import { DeleteUserData, userss } from './ApiCallll/Apicall';

// const User = () => {

//   const [value, setValue] = useState([]);

//   useEffect(() => {
//     const Togedivata = async () => {
//       try {
//         const res = await userss();
//         console.log('useeffect in user res data', res.data);
//         setValue(res.data);
//       } catch (err) {
//         console.log('err', err);
//       }

//     }
//     Togedivata()
//   }, [])


//   const DeleteData = async (id) => {
//     console.log('delete use id',id);
//     try{
//       DeleteUserData(id)
//       // console.log(DeleteData);
//     }catch(err){
//       console.log(err);
//     }
//   }

//   return (
//     <div className='user'>
//     <div className='main-div'>
//       <div className='main-head'>
//         <tr className='first-tr'>
//           <th className='name-th'>Name</th>
//           <th className='email-th'>Email</th>
//           <div className='remove-th'>Remove</div>
//         </tr>
//       </div>
//       <tbody>
//         {value.map((item) => (
//           <tr key={item.id}>
//             <div>{item.Name}</div>
//             <div >{item.Email}</div>
//             <button onClick={()=> DeleteData(item._id)} className='rmv-btn'>remove</button>
//           </tr>
//         ))}
//       </tbody>
//     </div>
//   </div>
//   )
// }

// export default User


