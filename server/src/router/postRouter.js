const express = require('express')
const router = express.Router()
const postController = require('../app/controllers/PostController')

router.get('/', postController.show)
router.get('/:id', postController.detail)
router.post('/create', postController.create)
router.put('/update/:id', postController.update)
router.delete('/delete/:id', postController.delete)
router.patch('/like/:id', postController.like)
router.patch('/comment/:id', postController.comment)
router.patch('/comment/delete/:idPost/:id', postController.deleteComment)

module.exports = router
