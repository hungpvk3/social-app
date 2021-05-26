const Posts = require('../models/PostModel')
const mongoose = require('mongoose')


class PostController {

    // [POST] api/posts/create
    async create (req, res) {
        const { title, content, image } = req.body

        if (!title || !content) 
        return res.status(409).json({ success: false, message: 'Error creating post' })

        try {
            const newPost = await new Posts({ title, content, image })

            await newPost.save()

            res.status(200).json({ success: true, message: 'Đăng bài viết thành công', newPost})
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal error server' })
        }
    }

    // [GET] api/posts/
    async show (req, res) {
        try {
            const posts = await Posts.find({})

            res.status(200).json({ success: true, posts})
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal error server' })
        }
    }

    // [GET] api/posts/:id
    async detail (req, res) {
        try {
            const post = await Posts.findById(req.params.id)

            res.status(200).json({ success: true, post})
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal error server' })
        }
    }

    // [PUT] api/posts/update/:id
    async update (req, res) {
        const { title, content, image, like } = req.body
        const id = req.params.id
        if (!title || !content)
        return res.status(409).json({ success: false, message: 'Missing title or content' })

        if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(409).json({ success: false, message: 'Invanid id post'})
        try {
            let updatedPost = {
                title,
                content,
                image,
                like: like || 0
            }
            const postCondition = { _id: id }
    
            updatedPost = await Posts.findOneAndUpdate(postCondition, updatedPost, { new: true })
    
            if (!updatedPost) {
                return res.status(409).json({ success: false, message: 'Updated falure' })
            }
    
            res.json({ success: true, message: 'Cập nhật bài viết thành công', post: updatedPost})
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal error server' })
        }
    }

    // [PATCH] api/posts/like/:id
    async like (req, res) {
        const id = req.params.id

        if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(409).json({ success: false, message: 'Invanid id post'})

        try {
            const post = await Posts.findById(id)

            const postCondition = { _id: id }

            const likePost = await Posts.findByIdAndUpdate(postCondition, { like: post.like + 1 }, { new: true })

            if (!likePost)
            return res.status(409).json({ success: false, message: 'Like falure' })

            res.status(200).json({ success: true, message: 'Like Successfully', post: likePost })
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal error server' })
        }
    }

    // [PATCH] api/posts/comment/:id
    async comment (req, res) {
        const { comment } = req.body
        const id = req.params.id

        if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(409).json({ success: false, message: 'Invanid id post'})

        try {

            const postCondition = { _id: id }

            const commentPost = await Posts.findByIdAndUpdate(postCondition, { $push: { comment: { text: comment } } }, { new: true })
            if (!commentPost)
            return res.status(409).json({ success: false, message: 'Comment falure' })

            res.status(200).json({ success: true, message: 'Comment Successfully', post: commentPost })
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal error server' })
        }
    }


    // Delete comment
    async deleteComment (req, res) {
        const idComment = req.params.id
        const idPost = req.params.idPost

        if (!mongoose.Types.ObjectId.isValid(idPost))
        return res.status(409).json({ success: false, message: 'Invanid id post'})

        try {
            const postCondition = { _id: idPost }

            const deletedPost = await Posts.findByIdAndUpdate(postCondition, { $pull: { comment: { _id: idComment } } }, { new: true})

            if (!deletedPost)
            return res.status(409).json({ success: false, message: 'Delete comment falure' })

            res.json({ success: true, message: 'Delete Comment Sucessfully', post: deletedPost})
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal error server' })
        }
    }


    // [DELETE] api/posts/delete/:id
    async delete (req, res) {
        const id = req.params.id

        if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(409).json({ success: false, message: 'Invanid id post'})

        try {
            const postCondition = { _id: id }
            
            const post = await Posts.findOneAndDelete(postCondition)

            res.status(200).json({ success: true, message: 'Đã xoá bài viết', post })
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal error server' })
        }
    }

}

module.exports = new PostController