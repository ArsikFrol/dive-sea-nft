const defaultAllUser = {
    users: []
}

const allUser = (state = defaultAllUser, action) => {
    switch (action.type) {
        case 'OPENING_WEBSITE_USER':
            return { ...state, users: action.payload }
        default:
            return { ...state }
    }
}

export default allUser