let initialState = {
    friends: [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Mike"},
        {id: 3, name: "David"},
        {id: 4, name: "Lisa"},
        {id: 5, name: "Alex"},

    ],
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;