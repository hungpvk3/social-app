import React, { useContext } from 'react'
import user from '../../../acset/img/usersvg.svg'
import { AppContext } from '../../../conotexts/AppContext'
import { Form, Button } from 'react-bootstrap'
import './comment.css'

const CommentText = ({ cmt, _id }) => {

    const { deleteComment } = useContext(AppContext)

    const handleDeleteCmt = (event) => {
        event.preventDefault()
        try {
            deleteComment(_id, cmt._id)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="comment__text mt-3">
            <img src={user} alt="user" className="comment__text-user"/>
            <div className="comment__text-cmt"><span>{cmt.text}</span></div>
            <Form onSubmit={handleDeleteCmt}>
                <Button className="comment__text-delete" type="submit">Xoa</Button>
            </Form>
        </div>
    )
}

export default CommentText
