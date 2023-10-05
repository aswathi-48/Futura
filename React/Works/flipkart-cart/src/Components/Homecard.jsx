import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Homecard = ({ CartCount }) => {

    const [state, setstate] = useState([]);

    useEffect(() => {
        async function display() {
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
            // console.log(res.data);
            setstate(res.data)
        }
        display()
    }, [])
    // console.log('state data',state);

    // const a = state.filter((data) => {
    //     return data.id <= 4
    // })

    const datas=state.filter((li)=>li.id<=10)

    //   console.log('8888',a);

    return (
        <div>
            <div className="card-container">
                {datas.map((user) => (
                    <div className="card-card" key={user.id}>
                        <span className="card-text">{user.id}</span>
                        <img
                            src={user.thumbnailUrl}
                            alt="grocerygettyf1122"
                            className="card-grocerygettyf1"
                        />
                        <span className="card-text1">{user.title}</span>
                        <button
                            className="card-add-to-cart-button"
                            onClick={() => {
                                CartCount(user);
                            }}
                        > 
                            <span className="card-text5">Add To Cart</span>
                        </button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Homecard