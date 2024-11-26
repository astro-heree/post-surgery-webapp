import { Button, Nav } from 'reactstrap'
import React from 'react'
import { USER_TYPE } from '../utils/constants'

const UserSelection = () => {

    const handleClick = (userType) => {
        switch (userType) {
            case 1:
                window.location.href = "/user-entry"
                break
            case 2:
                window.location.href = "/coming-soon"
                break
            default:
                window.location.href = "/abs"
                break
        }
    }


    return (
        <div className=''>
            UserSelection
            <div>
                <Button className='primary' onClick={() => handleClick(USER_TYPE.USER)}>
                    User
                </Button>
                <Button className='secondary' onClick={() => handleClick(USER_TYPE.SURGEON)}>
                    Surgeon
                </Button>
                <Button className='success' onClick={() => handleClick(USER_TYPE.ADMIN)}>
                    Admin
                </Button>
            </div>
        </div>
    )
}

export default UserSelection