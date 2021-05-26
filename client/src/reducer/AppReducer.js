export const AppReducer = (state, action) => {
    const { type, payload } = action

    switch(type) {
        case 'GET_POST':
            return {
                isLoading: false,
                posts: payload
            }
        case 'CREATE_POST':
            return {
                ...state,
                posts: [...state.posts, payload]
            }
        case 'UPDATE_POST':
            const newPosts = state.posts.map(post => post._id === payload._id ? payload : post)
            return {
                ...state,
                posts: newPosts
            }
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== payload._id)
            }
        case 'LIKE_POST':
            const newPost = state.posts.map(post => post._id === payload._id ? payload : post)
            return {
                ...state,
                posts: newPost
            }
        case 'FIND_POST':
            return {
                ...state,
                post: payload
            }
        case 'FIND_CMT':
            return {
                ...state,
                comment: payload
            }
        case 'COMMENT':
            const newPs = state.posts.map(post => post._id === payload._id ? payload : post)
            return {
                ...state,
                posts: newPs
            }
        case 'DELETE_CMT':
            const newCMT = state.posts.map(post => post._id === payload._id ? payload : post)
            return {
                ...state,
                posts: newCMT
            }
        default:
            return state
    }
}