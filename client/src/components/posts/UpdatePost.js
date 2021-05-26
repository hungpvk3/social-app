import React, { useState, useContext, useEffect } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import FileBase64 from 'react-file-base64'
import { AppContext } from '../../conotexts/AppContext'


const UpdatePost = () => {

    const { state: { post }, updatePost, showUpdate, setShowToast, setShowUpdate } = useContext(AppContext)

    const [dataPost, setDataPost] = useState(post)
    useEffect(() => setDataPost(post), [post])

    const resetPage = () => {
        setShowUpdate(false)
    }

    const onChangeInput = (event) => {
        setDataPost({ ...dataPost, [event.target.name]: event.target.value })
    }

    console.log(dataPost )
    const handleUpdatePost = async (event) => {
        event.preventDefault()

        try {
            const updated = await updatePost(dataPost)
            if (updated.success) {
                resetPage()
                setShowToast({ show: true, message: updated.message })
                setTimeout(() => setShowToast({show: false, message: ''}), 5000)
            }
        } catch (error) {
            console.log(error)   
        }
    }

    return (
        <div>
            <Modal show={showUpdate} onHide={resetPage}>
                <Modal.Header >
                    <Modal.Title>Cập nhật trạng thái</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleUpdatePost}>
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
                                value={dataPost.title}
                                onChange={onChangeInput}
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
                                value={dataPost.content}
                                onChange={onChangeInput}
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
                        <Button variant='secondary' onClick={resetPage}>
                            Cancel
                        </Button>
                        <Button variant='primary' type='submit'>
                            Cập nhật
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

export default UpdatePost
