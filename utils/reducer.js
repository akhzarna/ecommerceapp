const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_USER":
            state = { ...state, user: !state.user }
            return state;

        default:
            return state;
    }
}

export default reducer