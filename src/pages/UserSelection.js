import { Button } from 'reactstrap'
import React from 'react'
import { USER_TYPE } from '../utils/constants'

const UserSelection = () => {

    const handleClick = (userType) => {
        switch (userType) {
            case 1:
                window.location.href = "/login"
                break
            default:
                window.location.href = "/coming-soon"
                break
        }
    }


    return (
        <div className='bg-dark text-white d-flex flex-column justify-content-center align-items-center' style={{height: "80vh"}}>
            <div style={{fontSize: "30px"}}> Login As</div>
            <div className='mt-3'>
                <Button color='primary' className='mx-2' onClick={() => handleClick(USER_TYPE.USER)}>
                    User
                </Button>
                <span>
                    OR  
                </span>
                <Button color='secondary' className='mx-2' onClick={() => handleClick(USER_TYPE.SURGEON)}>
                    Surgeon
                </Button>
                {/* <Button color='success' className='mx-2' onClick={() => handleClick(USER_TYPE.ADMIN)}>
                    Admin
                </Button> */}
            </div>
        </div>
    );
}

export default UserSelection