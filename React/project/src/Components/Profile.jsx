import React, { useState } from 'react'
import profile from './Assets/asw.jpg'

const Profile = () => {
    const [followers, setFollowers] = useState(434000);
    
    const incrementFollower = () => {
        setFollowers(followers + 1);
    };

    return (
        <div className="profile-container">

            <div class="padding">
                <div class="col-md-8">
                    <div class="card"> <img class="card-img-top" src="https://i.imgur.com/K7A78We.jpg" alt="Card image cap" />
                        <div class="card-body little-profile text-center">
                            <div class="pro-img"><img src={profile} alt="user" /></div>
                            <h3 class="m-b-0">Aswathi K</h3>
                            <p>Web Designer &amp; Developer</p> <a href="javascript:void(0)" class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true" onClick={incrementFollower}>Follow</a>
                            <div class="row text-center m-t-20">
                                <div class="col-lg-4 col-md-4 m-t-20">
                                    <h3 class="m-b-0 font-light">10434</h3><small>Articles</small>
                                </div>
                                <div class="col-lg-4 col-md-4 m-t-20">
                                    <h3 class="m-b-0 font-light">{followers}</h3><small>Followers</small>
                                </div>
                                <div class="col-lg-4 col-md-4 m-t-20">
                                    <h3 class="m-b-0 font-light">5454</h3><small>Following</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile