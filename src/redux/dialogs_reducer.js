const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    messages: [{ id: 1, text: "Hi", myMessage: true },
    { id: 2, text: "What's up", myMessage: false },
    { id: 3, text: "Easy", myMessage: true },
    { id: 4, text: "You?", myMessage: true },
    { id: 5, text: "Me too", myMessage: false },
    ],
    dialogs: [
        { id: 1, name: "Robert" },
        { id: 2, name: "John" },
        { id: 3, name: "Alex" },
        { id: 4, name: "Joe" },
        { id: 5, name: "Donald" },
        { id: 6, name: "George" },
    ],
}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                text: action.newMessageBody,
                myMessage: true
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };

        default:
            return state;

    }
}


export const sendMessageCreator = (newMessageBody) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody,
    }
}

export default dialogsReducer;