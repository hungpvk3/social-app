import React, { useContext, useState } from 'react'
import user from '../../../acset/img/usersvg.svg'
import { AppContext } from '../../../conotexts/AppContext'
import { Form } from 'react-bootstrap'
import './comment.css'

const Comment = ({_id}) => {

    const { findComment, createComment } = useContext(AppContext)
    const [commentData, setComment] = useState({
        comment: ''
    })

    const onChangeComment = (event) => {
        setComment({ ...commentData, [event.target.name]: event.target.value })
    }

    const handleCmt = (event) => {
        event.preventDefault()
        try {
            createComment(_id, commentData)
            setComment({ comment:''})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="comment__header">
            <Form onSubmit={handleCmt}>
                <div className="row comment__header-form mt-4 mb-4" onClick={() => findComment(_id)}>
                    <img src={user} alt="" className="col-3 comment-user"/>
                    <input type="text" name="comment" placeholder=" Comments" className="col-9 comment__header-input" onChange={onChangeComment} value={commentData.comment}/>
                </div>
            </Form>
        </div>
    )
}

export default Comment
