import React, { useState, useContext } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import FileBase64 from 'react-file-base64'
import { AppContext } from '../../conotexts/AppContext'

const AddPost = () => {

    const [dataPost, setDataPost] = useState({
        title: '',
        description: '',
        image: '',
    })

    const { showModal, setShowModal, setShowToast, createPost } = useContext(AppContext)

    const resetPage = () => {
        setShowModal(false)
        setDataPost({
            title: '',
            content: '',
            image: '',
        })
    }

    const handleClose = () => {
        resetPage()
    }
    const handleCreatePost = async (event) => {
        event.preventDefault()

        try {
            const created = await createPost(dataPost)
            if (created.success) {
                resetPage()
                setShowToast({ show: true, message: created.message})
                setTimeout(() => setShowToast({show: false, message: ''}), 5000)
            }
        } catch (error) {
            console.log(error)
        }
    }    
    
    const onChangeInput = (event) => {
        setDataPost({ ...dataPost, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Bạn đang nghĩ gì </Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleCreatePost}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Text id='title-help' muted>
                                Title
                            </Form.Text>
                            <Form.Control
                                type='text'
                                placeholder='Title'
                                name='title'
                                required
                                aria-describedby='title-help'
                                onChange={onChangeInput}
                                value={dataPost.title}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Text id='title-help' muted>
                                Description
                            </Form.Text>
                            <Form.Control
                                as='textarea'
                                rows={3}
                                placeholder='Description'
                                name='content'
                                onChange={onChangeInput}
                                value={dataPost.content}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Text id='title-help' muted>
                                Image
                            </Form.Text>
                            <FileBase64
                                accept='image/*'
                                multiple={false}
                                type='file'
                                value={dataPost.image}
                                onDone={({ base64 }) => setDataPost({ ...dataPost, image: base64 })}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant='primary' type='submit'>
                            Đăng
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default AddPost
