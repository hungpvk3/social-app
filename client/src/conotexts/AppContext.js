import React, { createContext, useEffect, useReducer, useState } from 'react'
import { AppReducer } from '../reducer/AppReducer'
import { api } from './api'
import axios from 'axios'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {


    const [state, dispatch] = useReducer(AppReducer, {
        isLoading: true,
        posts: [],
        post: {},
        comment: {}
    })

    // Show modal
    const[showModal, setShowModal] = useState(false)
    const[showUpdate, setShowUpdate] = useState(false)
    const[showToast, setShowToast] = useState({
        show: false,
        message: ''
    })

    useEffect(() => getPost(), [])
    // Get post api
    const getPost = async () => {
        try {
            const response = await axios.get(api)

            if (response.data.success)
                dispatch({ type:'GET_POST', payload: response.data.posts })
            return response.data
        } catch (error) {
            return error.response.data
        }
    }
    console.log(state)
    // Create post
    const createPost = async (postData) => {
        try {
            const response = await axios.post(`${api}/create`, postData)

            if (response.data.success)
                dispatch({ type: 'CREATE_POST', payload: response.data.newPost })

            return response.data
        } catch (error) {
            return error.response.data
        }
    }

    // Create comment
    const createComment = async (postId, text) => {
        try {
            const response = await axios.patch(`${api}/comment/${postId}`, text)

            if (response.data.success) 
                dispatch({ type: 'COMMENT', payload: response.data.post })
            
            return response.data
        } catch (error) {
            return error.response.data
        }
    }


    // Update Post
    const updatePost = async (postData) => {
        try {
            const response = await axios.put(`${api}/update/${postData._id}`, postData)

            if (response.data.success)
                dispatch({ type: 'UPDATE_POST', payload: response.data.post })

            return response.data
        } catch (error) {
            return error.response.data
        }
    }

    // Delete Comment
    const deleteComment = async (idPost, idComment) => {
        try {
            const response = await axios.patch(`${api}/comment/delete/${idPost}/${idComment}`) 

            if (response.data.success)
                dispatch({ type: 'DELETE_CMT', payload: response.data.post })
        } catch (error) {
            return error.response.data
        }
    }


    // Delete post
    const deletePost = async (postId) => {
        try {
            const response = await axios.delete(`${api}/delete/${postId}`)

            if (response.data.success)
                dispatch({ type: 'DELETE_POST', payload: response.data.post })

            return response.data
        } catch (error) {
            return error.response.data
        }
    }

    // Like post
    const likePost = async (postId) => {
        try {
            const response = await axios.patch(`${api}/like/${postId}`)

            if (response.data.success)
                dispatch({ type: 'LIKE_POST', payload: response.data.post })
        } catch (error) {
            return error.response.data
        }
    }

    // Find Post update
    const findPost = (postId) => {
        const post = state.posts.find(post => post._id === postId)
        dispatch({ type: 'FIND_POST', payload: post})
    }

    // Find Comment
    const findComment = (postId) => {
        const post = state.posts.find(post => post._id === postId)
        dispatch({ type: 'FIND_CMT', payload: post})
    }

    const appContextData = {
        state,
        showModal,
        showToast,
        showUpdate,
        setShowUpdate,
        setShowModal,
        setShowToast,
        getPost,
        createPost,
        updatePost,
        deletePost,
        likePost,
        findPost,
        createComment,
        findComment,
        deleteComment
    }

    return (
        <AppContext.Provider value={ appContextData }>
            { children }
        </AppContext.Provider>
    )
}

export default AppContextProvider
