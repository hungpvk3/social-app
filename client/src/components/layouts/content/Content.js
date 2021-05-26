import React, { useContext } from 'react'
import { AppContext } from '../../../conotexts/AppContext'
import ContentPost from './ContenntPost'
import AddPost from '../../posts/AddPost'
import UpdatePost from '../../posts/UpdatePost'
import ContentTop from '../contentTop/ContentTop'


const Content = () => {
    let body
    const { state: { posts, post } } = useContext(AppContext)


    if (posts.length === 0) {
        body = (
            <div className="text-center">Not post</div>
        )
    } else {
        body = (
            posts.map(post => <ContentPost key={post._id} title={post.title} content={post.content} image={post.image} likes={post.like} _id={post._id} comments={post.comment}/>)
        )
    }

    return (
        <>
            <ContentTop />
            { body }
            <AddPost />
            { post !== undefined && <UpdatePost /> }
        </>
    )
}

export default Content
