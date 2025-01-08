const defaultCollection = {
    collections: []
}

const allCollections = (state = defaultCollection, action) => {
    switch (action.type) {
        case 'OPENING_WEBSITE_COLLECTION':
            return { ...state, collections: action.payload }
        default:
            return { ...state }
    }
}

export default allCollections