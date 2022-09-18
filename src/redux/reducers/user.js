const init_state = {
    username: "",
    fullname: "",
    email: "",
    role: "",
    id: ""
}

const userReducer = (state = init_state, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default userReducer;