const initialState = {
    isVisible: false,
    message: "Render here notification..."
}

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return {
                isVisible: true,
                message: action.message
            }
        case 'REMOVE_NOTIFICATION':
            return {
                ...state,
                isVisible: false,
            }
        default:
            return state
    }
}

export const createNotification = message => {
    return {
        type: 'SET_NOTIFICATION',
        message
    }
}

export const hideNotification = () => {
    return { type: 'REMOVE_NOTIFICATION' }
}

export default notificationReducer