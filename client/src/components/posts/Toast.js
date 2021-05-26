import React, { useContext } from 'react'
import { AppContext } from '../../conotexts/AppContext'
import { Toast } from 'react-bootstrap'
import user from '../../acset/img/usersvg.svg'
import './Toast.css'

const ToastModal = () => {
    const { showToast: { show, message } } = useContext(AppContext)


    return (
        <>
            <Toast style={{position: 'fixed', top: '55px', right: '15px', width: '13%'}} show={show}>
            <Toast.Header>
                <img src={user} className="rounded mr-2" alt="" />
                <strong className="mr-auto"></strong>
                <small className="time">1 mins ago</small>
            </Toast.Header>
            <Toast.Body style={{backgroundColor: 'green', color: 'white'}}>{ message }</Toast.Body>
            </Toast> 
        </>
    )
}

export default ToastModal
