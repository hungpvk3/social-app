import React, { useContext } from 'react'
import { AppContext } from '../../../conotexts/AppContext'
import user from '../../../acset/img/usersvg.svg'
import like from '../../../acset/img/like.svg'
import comment from '../../../acset/img/comment.svg'
import share from '../../../acset/img/share.svg'
import more from '../../../acset/img/more.svg'
import Comment from '../comments/Comment'
import CommentText from '../comments/CommentText'
import './content.css'


const ContenntPost = ({ _id, title, content, image, likes, comments }) => {
    const { deletePost, likePost, findPost, setShowToast, setShowUpdate } = useContext(AppContext)

    const handelFindPost = () => {
        findPost(_id)
        setShowUpdate(true)
    }

    const handleDelete = async () => {
        try {
            const deleted = await deletePost(_id)
            if (deleted.success) {
                setShowToast({ show: true, message: deleted.message })
                setTimeout(() => setShowToast({show: false, message: ''}), 5000)
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <div className="row content__app">

                <div className="col-12 mt-4">
                    <div className="card" style={{width: '80%', margin: '0 auto'}}>
                        <div className="card-header" >
                            <div className="card-header-title">
                                <div>
                                    <img src={user} alt="" style={{height: '36px', width: '36px', marginRight: '10px'}}/>
                                    <span>{title}</span>
                                </div>
                                <div className="dropdown">
                                <img src={more} className="dropbtn" alt="" />
                                    <div className="dropdown-content">
                                        <p onClick={handelFindPost}>Update Post</p>
                                        <p onClick={handleDelete}>Delete Post</p>
                                    </div>
                                </div>
                            </div>
                            <span>{content}</span>
                        </div>
                        <img className="card-img-top" src={image} alt="Card" />
                        <div className="card-footer content__card-footer">
                            <div className="row">
                                <div className="col-4 footer__item" onClick={() => likePost(_id)}>
                                    <img src={like} alt="" /> 
                                    <span>Like {likes}</span>
                                </div>
                                <div className="col-4 footer__item" >
                                    <img src={comment} alt=""/> 
                                    <span>Comments {comments.length}</span>                               
                                </div>
                                <div className="col-4 footer__item">
                                    <img src={share} alt=""/> 
                                    <span>Share</span>                               
                                </div>
                            </div>
                        </div>
                        <Comment _id={_id}/>
                        <div className="over__flow">
                            {comments.map(cmt => <CommentText key={cmt._id} cmt={cmt} _id={_id}/>)}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ContenntPost
