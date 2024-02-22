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
              <th className='img-th'>Image</th>
              <th className='name-th'>Name</th>
              <th className='email-th'>Email</th>
              <th className='remove-th'>Remove</th>

            </tr>
          </thead>
          <tbody className='ctnt-div'>
            {value.map((item) => (
              <tr key={item._id}>
                <td>{item && <img src={`${process.env.PUBLIC_URL}/Images/${item.Images}`} alt='' height={70} style={{borderRadius:50}}/>}</td>
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








// import React, { useEffect, useState } from 'react';
// import './User.css';
// import { DeleteUserData, userss } from './ApiCallll/Apicall';

// const User = () => {
//   const [users, setUsers] = useState([]);
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [userToDelete, setUserToDelete] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await userss();
//         setUsers(res.data);
//       } catch (err) {
//         console.log('err', err);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleDelete = async () => {
//     if (userToDelete) {
//       try {
//         await DeleteUserData(userToDelete._id);
//         setUsers(users.filter(user => user._id !== userToDelete._id));
//         setShowConfirmation(false);
//         setUserToDelete(null);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   const showDeleteConfirmation = (user) => {
//     setUserToDelete(user);
//     setShowConfirmation(true);
//   };

//   return (
//     <div className='user'>
//       <div className='main-div'>
//         <table className='main-table'>
//           <thead className='main-head'>
//             <tr className='first-tr'>
//               <th className='img-th'>Image</th>
//               <th className='name-th'>Name</th>
//               <th className='email-th'>Email</th>
//               <th className='remove-th'>Remove</th>
//             </tr>
//           </thead>
//           <tbody className='ctnt-div'>
//             {users.map((user) => (
//               <tr key={user._id}>
//                 <td>{user && <img src={`${process.env.PUBLIC_URL}/Images/${user.Images}`} alt='' height={70} style={{borderRadius:50}}/>}</td>
//                 <td className='name-item'>{user.Name}</td>
//                 <td className='email-item'>{user.Email}</td>
//                 <td>
//                   <button onClick={() => showDeleteConfirmation(user)} className='rmv-btn'>
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {showConfirmation && (
//         <div className="confirmation-popup">
//           <p>Are you sure you want to delete {userToDelete && userToDelete.Name}'s data?</p>
//           <button onClick={handleDelete}>Yes, Delete</button>
//           <button onClick={() => setShowConfirmation(false)}>Cancel</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default User;














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


