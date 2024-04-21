import React from 'react'
import { PiDotsThreeBold } from 'react-icons/pi'
import profile from '../../assets/profile.jpg'
const Profile = () => {
    return (
        <div className=' h-full  flex items-center justify-center'>
            <div className="profile-card rounded shadow-2xl p-4">
                <div className="card-head flex items-center relative gap-6">
                    <div className="profile-image w-20 h-20">
                        <img src={profile} className='h-full w-full rounded-full' />
                    </div>
                    <div className="profile-name">
                        <h3 className='text-2xl'>Hannah Baker</h3>
                        <h5 className='text-sm'>Student,Riverdale</h5>
                    </div>
                    <div className=' text-xl absolute top-2 right-2 '>
                        <PiDotsThreeBold />
                    </div>
                </div>
                <div className="card-content w-full max-w-sm py-6">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nulla magnam nostrum cupiditate harum. Nostrum voluptate aut similique unde. Iste, aliquam delectus enim illo cupiditate tempore eum sapiente temporibus exercitationem!</p>
                </div>
                <div className="action-cont border-t-2 flex justify-between py-2">
                    <div className='text-blue-500 font-normal'><button>Send Message</button></div>
                    <div className='font-normal text-red-600'><button>Edit Profile</button></div>
                </div>

            </div>
        </div>
    )
}

export default Profile
